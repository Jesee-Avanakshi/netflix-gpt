// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbTTlXIE4t7C1tFJitLpWp4IEXNRdYQ04",
  authDomain: "netflix-gpt-1603.firebaseapp.com",
  projectId: "netflix-gpt-1603",
  storageBucket: "netflix-gpt-1603.firebasestorage.app",
  messagingSenderId: "145984571504",
  appId: "1:145984571504:web:c1091d0eb1826e9a528cb5",
  measurementId: "G-8M3F7HEJL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();