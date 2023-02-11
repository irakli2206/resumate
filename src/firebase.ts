import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage, ref } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVrWEzcT30tRcYAGKNM2Fuxdh3F6RRvU0",
    authDomain: "resumate-6b5c1.firebaseapp.com",
    projectId: "resumate-6b5c1",
    storageBucket: "resumate-6b5c1.appspot.com",
    messagingSenderId: "112175434822",
    appId: "1:112175434822:web:df69c4ce9ca6feae540e47",
    measurementId: "G-CD0RRJD67P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
