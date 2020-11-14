import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Logo from "./images/Capture5.png"
import Logo2 from "./images/logo.png"
import Form from "./form"
import firebase from './config/firebase';



class facebook_login extends React.Component{
    constructor(){
        super()
        this.state={
            facebookId : ""
            
        }

    }
    
    facebook_login= () => {
        const facebookId = this.state.facebookId
        console.log("facebook login")

    }

    render(e){
       
        return()=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        
        .then((result)=> {
            
            var token = result.credential.accessToken;
            
            var user = result.user;

            console.log("user==>",user)
            
          }).catch((error)=> {

            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorMessage)
            
        
           
          });

          
    }
   

    }
   
  

}

export default facebook_login ;
