import React from 'react';
import './App.css';
import Logo from "./logo"
import {Picture,Picture2, Picture3} from "./pic"
import Header from "./header"
import Cards from './card'
import {Footer,Footer2} from "./footer"
import {Link} from 'react-router-dom'
import OLX3 from "./images/olx3.PNG"
import Form from "./form"
import Login from './login';
import firebase from "firebase"
// import firebase from "./config/firebase"





class App extends React.Component{
  constructor(){
    super()
    this.state={
      item:""
    }
  }
  facebook_login=()=>{
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  
  .then((result)=> {
      
      var token = result.credential.accessToken;
      
      var user = result.user;

      console.log("user==>",user)
      this.props.history.push("/form")
      
    }).catch((error)=> {

      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorMessage)
      
  
     
    });
  }

  search_item=()=>{
    var items = this.state.item
    items = items.toLowerCase()
    if (items === "car"){
      this.props.history.push("/car")
    }
    else if (items === "mobile"){
      this.props.history.push("/mobile")
    }
    else if (items === "tablet"){
      this.props.history.push("/tablet")
    }
    else if (items === "furniture"){
      this.props.history.push("/furniture")
    }
    else if (items === "curtains"){
      this.props.history.push("/curtains")
    }
    else if (items === "bike"){
      this.props.history.push("/slide5")
    }
    else {alert("Please write the correct item name")}
  }
  render(){
    return(
      <div>
       <div className="navigation">
        <Logo />
        <input type="text" className="searching" placeholder="Azad Kashmir"/>
        <input type="text" placeholder="Find Cars,Mobile Phones and more" className="searchingItems" onChange={(e)=>this.setState({item:e.target.value})} /> 
        <button className="searchBtn" onClick={this.search_item}>Search</button>
       
        
<button type="button" id="loginBtn" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
Login
</button>
<button type="button" id="sellBtn"className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
+SELL
</button>
      

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        
        

      

        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

        <img src={OLX3}  />
        <h5>Help make olx safer place to buy and sell</h5>
        <Link to="/login"><button className="loginemail"> <b>Continue With Google</b></button></Link>
        <br/>
        <Link to="/login"><button type="button" class="btn btn-primary loginemail" id="logemail" data-toggle="modal" data-target="#exampleModal" >
        <b>Continue With Email</b>
        </button></Link>

        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
        <br/>
        <button className="loginemail"> <b>Continue With Phone</b></button>
        <br/>
        <button className="loginemail" onClick={this.facebook_login}><b>Continue With facebook</b></button>
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>

</div>


      <div>
        <Header />
      </div>
      <div>
        <Picture />
      </div>
      
        <div className="pic2"> 
           <Picture2 />
           </div>
           <br/>

       <div>
       <Cards />
     </div>
        <br/>

        <div>
          <Picture3 />
        </div>
      <div>
       <Footer />
     </div>
      

     <div>
       <Footer2 />
     </div>

    
</div>


    )
  }
}

export default App;