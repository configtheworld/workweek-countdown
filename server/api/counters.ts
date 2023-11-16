import { Counter } from "~/types/Counter";
import { firestore } from "../utils/firebase";
import { getAuth } from "firebase-admin/auth";

export default defineEventHandler(async (event) => {
  const authToken = event.headers.get("Authorization");
  let validToken = false;

  if (authToken) {
    const [, token] = authToken.split(" ");
    try {
      const decodedToken = await getAuth().verifyIdToken(token);
      const uid = decodedToken.uid;
      console.log(uid);
      validToken = true;
    } catch (error) {
      console.error(error);
    }
  }

  const data: Counter[] = [];

  if (validToken) {
    const collectionRef = firestore.collection("counters");
    const querySnapshot = await collectionRef.get();

    querySnapshot.forEach((doc) => {
      const counterData = doc.data() as Counter;
      data.push(counterData);
    });
  }

  return data;
});
