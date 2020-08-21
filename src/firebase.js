import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCu6IkaIKf3q-7CuBHTk4aYTAEoT_TaWK8",
    authDomain: "whatsapp-clone-8bf91.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-8bf91.firebaseio.com",
    projectId: "whatsapp-clone-8bf91",
    storageBucket: "whatsapp-clone-8bf91.appspot.com",
    messagingSenderId: "775744525551",
    appId: "1:775744525551:web:e5b2bd4251e65a730f771a",
    measurementId: "G-5M2SMY0NE0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const  db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;