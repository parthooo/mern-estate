// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2fb83.firebaseapp.com",
  projectId: "mern-estate-2fb83",
  storageBucket: "mern-estate-2fb83.appspot.com",
  messagingSenderId: "36812585976",
  appId: "1:36812585976:web:a03ce02ed75b8a2310340d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);