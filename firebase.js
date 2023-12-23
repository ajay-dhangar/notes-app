// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzYbKPDsOjEjYQPsevvcOND5kYNHg84OQ",
  authDomain: "notes-and-tenzies-d1c9d.firebaseapp.com",
  projectId: "notes-and-tenzies-d1c9d",
  storageBucket: "notes-and-tenzies-d1c9d.appspot.com",
  messagingSenderId: "204770573975",
  appId: "1:204770573975:web:0715e092266d3ffa78b3d2",
  measurementId: "G-EKZR0PX1VN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const notesCollection = collection(db, 'notes');