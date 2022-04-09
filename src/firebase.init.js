// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdmkgYfp7fOlaPu9LkhNYMFfWInRInw_U",
    authDomain: "ema-jhon-simple-b9d1a.firebaseapp.com",
    projectId: "ema-jhon-simple-b9d1a",
    storageBucket: "ema-jhon-simple-b9d1a.appspot.com",
    messagingSenderId: "184867481593",
    appId: "1:184867481593:web:a58663cf82b2df4ae23f28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;