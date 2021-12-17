import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCoCpg0Qyzhsduy8lFJhxr2W0m_D3Sheck',
  authDomain: 'proyecto-weather-56f8b.firebaseapp.com',
  projectId: 'proyecto-weather-56f8b',
  storageBucket: 'proyecto-weather-56f8b.appspot.com',
  messagingSenderId: '76962852029',
  appId: '1:76962852029:web:50be6387f24177d3449bd4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()
const colRef = collection(db, 'historial')
const tarjetas = collection(db, 'tarjetas')

const googleAuthProvider = new GoogleAuthProvider()

export { db, googleAuthProvider, app, auth, colRef, tarjetas }
