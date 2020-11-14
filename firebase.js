import  firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/storage"


var firebaseConfig = {
    apiKey: "AIzaSyA85LKwUdmphVVwGqUYITae7lyvrOXYa8U",
    authDomain: "olx-login-4eb5e.firebaseapp.com",
    databaseURL: "https://olx-login-4eb5e.firebaseio.com",
    projectId: "olx-login-4eb5e",
    storageBucket: "olx-login-4eb5e.appspot.com",
    messagingSenderId: "819695508400",
    appId: "1:819695508400:web:0371ed29bbf72770825475",
    measurementId: "G-B89NETSHRP"
  };
 
  firebase.initializeApp(firebaseConfig)
   
  export default firebase;