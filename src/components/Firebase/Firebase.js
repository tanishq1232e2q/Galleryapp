// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgn8GgT8aiU7rCq4oBA5KBHOQlrTO90yg",
  authDomain: "galleryapp-68642.firebaseapp.com",
  projectId: "galleryapp-68642",
  storageBucket: "galleryapp-68642.appspot.com",
  messagingSenderId: "947052671535",
  appId: "1:947052671535:web:4507135d5f8110a6f18cda",
  measurementId: "G-7VNP1VZPQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const db=getFirestore(app)

const database = getDatabase(app);