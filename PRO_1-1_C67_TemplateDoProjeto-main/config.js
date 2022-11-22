import firebase from 'firebase';

// adicione SDK do Firebase

const firebaseConfig = {
  apiKey: "AIzaSyB-i2qNmWJNpfPaU6BXaKCbb3u51N-V2lM",
  authDomain: "code-aberto.firebaseapp.com",
  projectId: "code-aberto",
  storageBucket: "code-aberto.appspot.com",
  messagingSenderId: "34500503886",
  appId: "1:34500503886:web:d112a1d2f273b1be66d61f"
};


// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
