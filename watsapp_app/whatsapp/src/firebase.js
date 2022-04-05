import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyCdZFlbNboOhcrWc7pI2TLXDIY9BRnEAPc",

    authDomain: "whatsapp-clone-a2c22.firebaseapp.com",

    projectId: "whatsapp-clone-a2c22",

    storageBucket: "whatsapp-clone-a2c22.appspot.com",

    messagingSenderId: "503615519231",

    appId: "1:503615519231:web:42886efcd00919ac1d0fca",

    measurementId: "G-QQ3FXBP8HS"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;