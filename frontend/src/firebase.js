import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg0V2sp0FP3G_quG0EMsMB7qzn_AfzG00",
  authDomain: "purple-2fd5d.firebaseapp.com",
  projectId: "purple-2fd5d",
  storageBucket: "purple-2fd5d.firebasestorage.app",
  messagingSenderId: "329479617685",
  appId: "1:329479617685:web:8bbed9dbb443e425602f9c",
  measurementId: "G-GRESV8PYDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);