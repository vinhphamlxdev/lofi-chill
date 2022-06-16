import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5wHT8q8paserKKvUumujQsDa0NrO6vHw",
  authDomain: "lofi-chill-1f6c8.firebaseapp.com",
  projectId: "lofi-chill-1f6c8",
  storageBucket: "lofi-chill-1f6c8.appspot.com",
  messagingSenderId: "874999545002",
  appId: "1:874999545002:web:3d1c1c1620f552bd0e64d3",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const providerGoogle = new GoogleAuthProvider();
export const db = getFirestore(app);
