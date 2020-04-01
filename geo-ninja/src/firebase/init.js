import firbase from 'firebase'
import firstore from 'firebase/firestore'

var firebaseConfig = {
     apiKey: "AIzaSyDArWmi_luLtUCB9lCwORUjFLDSJRrtTcU",
     authDomain: "geo-ninja-9430f.firebaseapp.com",
     databaseURL: "https://geo-ninja-9430f.firebaseio.com",
     projectId: "geo-ninja-9430f",
     storageBucket: "geo-ninja-9430f.appspot.com",
     messagingSenderId: "235992241319",
     appId: "1:235992241319:web:15f12f7c4fd3b12aafb782",
     measurementId: "G-PHCXQJ3CJ4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseApp = firbase.initializeApp(config);
export default firebase.firestore(); 