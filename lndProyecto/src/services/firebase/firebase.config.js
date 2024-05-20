// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase} from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvNr193aqTYRKbl8xD5KVt-eq1eMIxTgc",
  authDomain: "students-c4cc1.firebaseapp.com",
  databaseURL: "https://students-c4cc1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "students-c4cc1",
  storageBucket: "students-c4cc1.appspot.com",
  messagingSenderId: "1048363134486",
  appId: "1:1048363134486:web:23cf3fe5cd11960349cf37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export default db