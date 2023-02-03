import firebase from "firebase";


//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyC9SvV4DjP9Vk0PZi-QGWqkfeSdmiqAaYU",
  authDomain: "e-ride-app-e934a.firebaseapp.com",
  projectId: "e-ride-app-e934a",
  storageBucket: "e-ride-app-e934a.appspot.com",
  messagingSenderId: "304305939577",
  appId: "1:304305939577:web:7aacca20497712003220a8"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


