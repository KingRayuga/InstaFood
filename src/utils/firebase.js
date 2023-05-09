// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCi8nMHcehenVfhvozcfk_PLEFPXg-oNc",
  authDomain: "instafood-e3577.firebaseapp.com",
  projectId: "instafood-e3577",
  storageBucket: "instafood-e3577.appspot.com",
  messagingSenderId: "1037932406883",
  appId: "1:1037932406883:web:988329b4231ef01f8eb056",
  measurementId: "G-38RXCRXQC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;

