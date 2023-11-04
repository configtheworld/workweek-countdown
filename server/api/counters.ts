import { Counter } from "~/types/Counter";
import { firestore } from "../utils/firebase";

export default defineEventHandler(async (event) => {
  const collectionRef = firestore.collection("counters");
  const querySnapshot = await collectionRef.get();

  const data: Counter[] = [];
  querySnapshot.forEach((doc) => {
    const counterData = doc.data() as Counter;
    data.push(counterData);
  });

  return data;
});
