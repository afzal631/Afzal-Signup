import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5gieOMEaRoiCAQ16eZlDRGozJexVGZQg",
  authDomain: "afzalregister.firebaseapp.com",
  projectId: "afzalregister",
  storageBucket: "afzalregister.appspot.com",
  messagingSenderId: "450099021893",
  appId: "1:450099021893:web:7825b0b93fac756b1f3b2c",
  measurementId: "G-KBS86DQZFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
