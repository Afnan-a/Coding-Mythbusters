import firebase from 'firebase';
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAOjmtKuzkog_KNCUWMQkgvLmg_qWpyjPw",
    authDomain: "ready-set-learn.firebaseapp.com",
    projectId: "ready-set-learn",
    storageBucket: "ready-set-learn.appspot.com",
    messagingSenderId: "217037053743",
    appId: "1:217037053743:web:6136bee23914259d9dcbda",
    measurementId: "G-W34P05QMK8"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;