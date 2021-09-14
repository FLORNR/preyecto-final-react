// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRUqJncIk9g78iZJdVTpqtIJMzIdc7B5Y",
  authDomain: "e-commercemoda.firebaseapp.com",
  projectId: "e-commercemoda",
  storageBucket: "e-commercemoda.appspot.com",
  messagingSenderId: "977262939822",
  appId: "1:977262939822:web:3dc481b93433bf5dd3673f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getData    = () => getFirestore(app);