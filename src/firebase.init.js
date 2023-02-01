// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAS65k9Ygv_bjJMGhJ3LCsEd-r2Gdib_Y",
  authDomain: "context-api-auth-3dced.firebaseapp.com",
  projectId: "context-api-auth-3dced",
  storageBucket: "context-api-auth-3dced.appspot.com",
  messagingSenderId: "680847982307",
  appId: "1:680847982307:web:3267afe1ab7d1f0c328fd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;