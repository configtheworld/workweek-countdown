import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCat7g5C7vHd_5DC9aeON5BZw71_2T-gJ4",
  authDomain: "workweek-9248b.firebaseapp.com",
  projectId: "workweek-9248b",
  storageBucket: "workweek-9248b.appspot.com",
  messagingSenderId: "142862004428",
  appId: "1:142862004428:web:cdb841c84b4856ab3c9269",
  measurementId: "G-6TC6SGL4GB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
