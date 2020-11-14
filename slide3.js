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
import 'bootstrap/dist/css/bootstrap.min.css'
import pic1 from "./images/card_2_1.PNG";
import pic2 from "./images/card_2_2.PNG"
import pic3 from "./images/card_2_3.jpg"
import pic4 from "./images/card_side_3.PNG"
import StaticMap from "./images/staticmap.png"
import firebase from "firebase"


class SlideApp3 extends React.Component{
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
        <input type="text" placeholder="Find Cars,Mobile Phones and more" className="searchingItems" onChange={(e)=>this.setState({item:e.target.value})}/> 
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
        <button className="loginemail"> <b>Continue With Google</b></button>
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

      <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#" />
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" href="#"><Link to = "/">Home</Link><span className="sr-only">(current)</span></a>
        <a className="nav-link" href="#">Business</a>
        <a className="nav-link" href="#">Agriculture</a>
        <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Industrial</a>
      </div>
    </div>
    </nav></div>

      
  </div>


       <div>

      </div>




      <div>
        <img src={pic4}   className="cardSlide"></img>
      </div>




       



      <div className="completeDetail">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic1} className="d-block " alt="..." width="800px" height="500px" />
    </div>
    <div className="carousel-item">
      <img src={pic2} className="d-block" alt="..."  width="800px" height="500px" />
    </div>
    <div className="carousel-item">
      <img src={pic3} className="d-block " alt="..."   width="800px" height="500px"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

<div>


  <div className="rs">
    <h1>RS 5000</h1>
    <p>Desi Assli murga</p>
    <p>Azad Kashmir</p>
  </div>
  
  <div className="rs dis">
    <h3>Seller Discription</h3>
    <p>Member since today</p>
    <button className="chat">Chat With Seller</button>
  </div>

  <div className="postedIn">
    <h3>Posted In</h3>
    <p>Mirpur, Azad Kashmir, Pakistan</p>
    <img src={StaticMap} height="100px" width="350px"/>
  </div>
  
</div>
<div>

  <h5 className="slideDetail">Description:</h5>
</div>

<div>

  <h5 className="slideDetail">Details:</h5>
</div>

</div>

       <div>
          <Picture3 />
        </div>
      <div>
       <Footer />
     </div>




</div>
    


  
  
      )
    }
  }
  
  export default SlideApp3;