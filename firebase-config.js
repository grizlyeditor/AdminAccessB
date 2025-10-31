// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, where, query, updateDoc, doc, setDoc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    authDomain: "ejene-d8ff7.firebaseapp.com",
    projectId: "ejene-d8ff7",
    storageBucket: "ejene-d8ff7.appspot.com",
    messagingSenderId: "101320601096418971113",
    appId: "1:101320601096418971113:web:aaaaaaaaaaaaaaaaaaaaaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { 
    auth, 
    db, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    collection, 
    addDoc, 
    getDocs, 
    where, 
    query, 
    updateDoc, 
    doc, 
    setDoc, 
    getDoc,
    deleteDoc
};