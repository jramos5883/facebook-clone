// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_IXVy4qpslcpTGEsYNJ8_JrO9sK2Ktlk",
    authDomain: "facebook-clone-app-eab30.firebaseapp.com",
    projectId: "facebook-clone-app-eab30",
    storageBucket: "facebook-clone-app-eab30.appspot.com",
    messagingSenderId: "626629582865",
    appId: "1:626629582865:web:c20d7d75d8cf74bf1351b0"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };