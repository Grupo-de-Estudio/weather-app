import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()
console.log(auth)

const googleAuthProvider = new GoogleAuthProvider()

export { db, googleAuthProvider, app, auth }
