import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAj4qVRiG6i6gxjUsA3aHaQa8VMv1FAWlQ",
    authDomain: "crud-78e72.firebaseapp.com",
    projectId: "crud-78e72",
    storageBucket: "crud-78e72.appspot.com",
    messagingSenderId: "169326617022",
    appId: "1:169326617022:web:44e4e1636bef76320ed9ef"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)