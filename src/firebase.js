import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA25_fwtKgAMJ2gl1BVkhl9wJjPLLa7omI",
    authDomain: "reactjsclone-2b1b7.firebaseapp.com",
    projectId: "reactjsclone-2b1b7",
    storageBucket: "reactjsclone-2b1b7.appspot.com",
    messagingSenderId: "1030571579881",
    appId: "1:1030571579881:web:f18b27f662d81dfc8dd378"
}

firebase.initializeApp(firebaseConfig);

// export const firebaseInstance = firebase;
// export const db = firebase.firestore();
// export const authService = firebase.auth();
// export const dbInstance = firebase.firestore;
// export const authInstance = firebase.auth;

// export const storageService = firebase.storage();

// export const dbService = firebase.firestore();
// export const firestoreInstance = firebase.firestore;