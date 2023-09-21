import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW0KVrxU5fwf18YPEh6QIzhmRHq9e0aLA",
  authDomain: "image-gallery-b557b.firebaseapp.com",
  projectId: "image-gallery-b557b",
  storageBucket: "image-gallery-b557b.appspot.com",
  messagingSenderId: "87932932845",
  appId: "1:87932932845:web:348fa926348da5c5dbf2e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app; 