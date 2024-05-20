// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase} from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ7u_NwPWCG3W9zWGMSR3fbpYdib4didc",
  authDomain: "tesa-643e4.firebaseapp.com",
  projectId: "tesa-643e4",
  storageBucket: "tesa-643e4.appspot.com",
  messagingSenderId: "29096489411",
  appId: "1:29096489411:web:8a608d4586cc5adde5cd76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export default db