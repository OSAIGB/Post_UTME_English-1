import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdCLx6lzZAY5e3pihmOVuK7x0Sp_fTfNA",
  authDomain: "readyspace-english1.firebaseapp.com",
  projectId: "readyspace-english1",
  storageBucket: "readyspace-english1.firebasestorage.app",
  messagingSenderId: "1021245299744",
  appId: "1:1021245299744:web:cc7be26eb994e8767eb045",
  measurementId: "G-222HJVMYN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
