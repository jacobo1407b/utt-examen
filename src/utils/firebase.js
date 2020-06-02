import firebase from "firebase/app";

var firebaseConfig = {
    apiKey: "AIzaSyDxblUMTsA7EQAGV3cgCcGMoYuaBN2_Ihk",
    authDomain: "utt-examen.firebaseapp.com",
    databaseURL: "https://utt-examen.firebaseio.com",
    projectId: "utt-examen",
    storageBucket: "utt-examen.appspot.com",
    messagingSenderId: "18898550084",
    appId: "1:18898550084:web:f333bed7d19c444b356b11",
    measurementId: "G-EZJBGMMT5R"
};

export default firebase.initializeApp(firebaseConfig);
