// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyARIVoM8LThHGxMlf-CZEXvukV_JHu7ADU',
  authDomain: 'netflix-clone-yt-56fa7.firebaseapp.com',
  projectId: 'netflix-clone-yt-56fa7',
  storageBucket: 'netflix-clone-yt-56fa7.appspot.com',
  messagingSenderId: '729269917141',
  appId: '1:729269917141:web:258f8d3f430cdc01c8d95c',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
