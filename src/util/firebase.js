
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtW0ppDQU9HAQKCoaUCkOObncZa2Ltrn4",
  authDomain: "tenacious-works-266307.firebaseapp.com",
  projectId: "tenacious-works-266307",
  storageBucket: "tenacious-works-266307.appspot.com",
  messagingSenderId: "474115631936",
  appId: "1:474115631936:web:3690bc2e0505d8caef68a5",
  measurementId: "G-P6HTE4BM71"
};
// Initialize Firebase
export const App = initializeApp(firebaseConfig)
export const auth = getAuth()
export const db = getFirestore(App)
//user Signup
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}
//user Login
export const loginUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}
//forgot password
export const userPasswordReset = async (email) => {
  if (!email) return
  return await sendPasswordResetEmail(auth, email)
}

export default App

