import firebase, { firestore } from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyC9OA4dJWDqpXelHMznQ6No6lEivxnHKVM",
    authDomain: "fir-react-example-5a00e.firebaseapp.com",
    databaseURL: "https://fir-react-example-5a00e.firebaseio.com",
    projectId: "fir-react-example-5a00e",
    storageBucket: "fir-react-example-5a00e.appspot.com",
    messagingSenderId: "1028630119107",
    appId: "1:1028630119107:web:3bcbc296c07b8c511ad876"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;