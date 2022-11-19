// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFlphcnQr6UK3dPaGHu9tEku1OC1UhUoI",
  authDomain: "chunappara-songwebapp.firebaseapp.com",
  projectId: "chunappara-songwebapp",
  storageBucket: "chunappara-songwebapp.appspot.com",
  messagingSenderId: "649555869355",
  appId: "1:649555869355:web:417e00419b43d6667cc1ee",
  measurementId: "G-N6BGKGRTP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore(app)