
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyClYdxdgPPHGmPCDlGnUD2Re2FcgCRVXIM",
  authDomain: "voice-interview-ai.firebaseapp.com",
  projectId: "voice-interview-ai",
  storageBucket: "voice-interview-ai.firebasestorage.app",
  messagingSenderId: "655054795143",
  appId: "1:655054795143:web:a91b45d8d23adeee09e322",
  measurementId: "G-WEJK82NFD6"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();
 export const auth = getAuth(app);
 export const db = getFirestore(app);