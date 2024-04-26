// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7Tq4SNG7cepoqn977MFEhwpzycnHk3dw",
  authDomain: "coffee-store-fbe2b.firebaseapp.com",
  projectId: "coffee-store-fbe2b",
  storageBucket: "coffee-store-fbe2b.appspot.com",
  messagingSenderId: "378032208813",
  appId: "1:378032208813:web:db32bafd4bfa92a313ff24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
