//import firebase from 'firebase';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/firestore"
import "firebase/compat/storage"

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAOjmtKuzkog_KNCUWMQkgvLmg_qWpyjPw",
    authDomain: "ready-set-learn.firebaseapp.com",
    projectId: "ready-set-learn",
    storageBucket: "ready-set-learn.appspot.com",
    messagingSenderId: "217037053743",
    appId: "1:217037053743:web:6136bee23914259d9dcbda",
    measurementId: "G-W34P05QMK8"
})

//firebaseConfig.initializeApp(firebaseConfig);
const store = firebaseConfig.storage().ref();
const auth = firebaseConfig.auth();
const db = firebaseConfig.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};
export {
  store,
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};