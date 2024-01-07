// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCOBq2TepZO2C_Z7h0OBpXtZYj00iSiGwo",
  authDomain: "netflix-clone-mern-d5a13.firebaseapp.com",
  projectId: "netflix-clone-mern-d5a13",
  storageBucket: "netflix-clone-mern-d5a13.appspot.com",
  messagingSenderId: "267822958524",
  appId: "1:267822958524:web:2b73c21f221c896c89cdb9",
  measurementId: "G-30DCCC4HKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firsbaseAuth=getAuth(app); 