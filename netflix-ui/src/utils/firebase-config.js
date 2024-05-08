
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1NeYaJqZuiCEZDRrgD4d29bL6YU3BQwA",
  authDomain: "react-netflix-clone-a9217.firebaseapp.com",
  projectId: "react-netflix-clone-a9217",
  storageBucket: "react-netflix-clone-a9217.appspot.com",
  messagingSenderId: "413911264467",
  appId: "1:413911264467:web:bcf88c149bcecb321f3826",
  measurementId: "G-DE40DSLEM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app) 