import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Logo from "./images/Capture5.png"
import Logo2 from "./images/logo.png"
import Form from "./form"
import firebase from './config/firebase';

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email : "",
            password : ""
        }
        
    }

    

    firebase_signup=()=>{
       const email = this.state.email
       const password = this.state.password
       
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result)=>{  
             this.props.history.push("/form")
         })
         .catch((error)=> {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
          })
        }
    
    firebase_login=()=>{
            const email = this.state.email
            const password = this.state.password

          firebase.auth().signInWithEmailAndPassword(email, password)
          .then((result)=>{  
            this.props.history.push("/form")
        })
          .catch((error)=>{
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            // ...
          })
     };
    
     render(e){
        return(
            <div className="loginBody">

                <br/>
                <br/>

                <img src={Logo} height="60px" width="100px"/>-----
                <img src={Logo2} height="80px" width="90px"/>

                <br/>
                <br/>
                <h3><b>Enter Your Email</b></h3>

                <input placeholder="Email" onChange={(e)=>this.setState({email:e.target.value})} type="text" email="email" className="emailInput"/> 
                <br />
                <br />
                <br />
                <br />

                <h3><b>Enter Your Password</b></h3>
                <input placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})} type="password" password="password" className="passInput"/><br />
                <br/>
                <br/>
               <button className="loginbutton" onClick={this.firebase_login}><b>Log in</b></button>
               <br/>
               <button className="loginbutton" onClick={this.firebase_signup}><b>Sign up</b></button>
            </div>
        )
    }
}

export default Login;