import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDwZL1Wbgiew7-yxSqXONRT0qmEy2cFtV4',
  authDomain: 'chatapp-a0365.firebaseapp.com',
  databaseURL: 'https://chatapp-a0365.firebaseio.com',
  projectId: 'chatapp-a0365',
  storageBucket: 'chatapp-a0365.appspot.com',
  messagingSenderId: '848667638094',
  appId: '1:848667638094:web:f46eae16c31d8979b2061f',
  measurementId: 'G-J1FC7MDVJ6',
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firestore, auth, timestamp }
