import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// other services is needed

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJclgXr6B8DaygmZ_uyzRUC5cOGS98MAY",
    authDomain: "phonetax-5f9d2.firebaseapp.com",
    projectId: "phonetax-5f9d2",
    storageBucket: "phonetax-5f9d2.appspot.com",
    messagingSenderId: "519733652300",
    appId: "1:519733652300:web:3d73d41c4f6e4439447de9",
    measurementId: "G-F4EKMYK9FD"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

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

const logout = () => {
    auth.signOut();
};

export {
    auth,
    db,
    signInWithGoogle,
    logout,
};