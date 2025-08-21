import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDPLkJ69q5mNLMpEw3rgs_VgI3niLWplu8",
    authDomain: "front-end-84aa2.firebaseapp.com",
    projectId: "front-end-84aa2",
    storageBucket: "front-end-84aa2.firebasestorage.app",
    messagingSenderId: "14028141234",
    appId: "1:14028141234:web:5c9b56dd13ae0e00458fab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)
