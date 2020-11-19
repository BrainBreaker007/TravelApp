import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAID2GgCDimftouNUMJ8nmnVedHqbxI2dY",
  authDomain: "signin-212e3.firebaseapp.com",
  databaseURL: "https://signin-212e3.firebaseio.com",
  projectId: "signin-212e3",
  storageBucket: "signin-212e3.appspot.com",
  messagingSenderId: "646153091065",
  appId: "1:646153091065:web:731821c8b66797c1392f28",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
// export const db = app.database();
