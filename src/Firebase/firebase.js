// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvzA6D43VeL6Kc2hqqZAYKUsu95s1BZlA",
  authDomain: "instagram-clone-271a6.firebaseapp.com",
  projectId: "instagram-clone-271a6",
  storageBucket: "instagram-clone-271a6.appspot.com",
  messagingSenderId: "836062655173",
  appId: "1:836062655173:web:943455049595add6edb6ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
