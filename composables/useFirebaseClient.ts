import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const useFirebaseClient = () => {
  const runtimeConfig = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: runtimeConfig.public.firebase.apiKey,
    authDomain: runtimeConfig.public.firebase.authDomain,
    projectId: runtimeConfig.public.firebase.projectId,
    storageBucket: runtimeConfig.public.firebase.storageBucket,
    messagingSenderId: runtimeConfig.public.firebase.messagingSenderId,
    appId: runtimeConfig.public.firebase.appId,
    measurementId: runtimeConfig.public.firebase.measurementId,
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  return {
    firebaseApp,
    firestore,
    auth,
  };
};
