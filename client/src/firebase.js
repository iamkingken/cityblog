// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ken-blog-1f440.firebaseapp.com",
  projectId: "ken-blog-1f440",
  storageBucket: "ken-blog-1f440.appspot.com",
  messagingSenderId: "234406429668",
  appId: "1:234406429668:web:cadf860fb8105274963df1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
