import * as firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyDU1ixGuJjHge1Osk8Hv9DMtFhOvYAIxVQ",
    authDomain: "phone-login-8fad1.firebaseapp.com",
    databaseURL: "https://phone-login-8fad1.firebaseio.com",
    projectId: "phone-login-8fad1",
    storageBucket: "phone-login-8fad1.appspot.com",
    messagingSenderId: "872863816389",
    appId: "1:872863816389:web:98836d328ea473bf90eeac"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
    