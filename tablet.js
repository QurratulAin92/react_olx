import React from 'react';
import Header from "./header";
import Logo from "./logo"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import { Footer,Footer2} from "./footer";
import Tab1 from "./images/tablet1.jpg"
import Tab2 from "./images/tablet2.jpg"
import Tab3 from "./images/tablet3.jpg"
import Tab4 from "./images/tablet4.jpg"
import Tab5 from "./images/tablet5.jpg"
import Tab6 from "./images/tablet6.jpg"
import Tab7 from "./images/tablet7.jpg"
import OLX3 from "./images/olx3.PNG"
import firebase from "firebase"


class Tablet extends React.Component{
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
        <Link to="/login"><button type="button" class="btn btn-primary loginemail" id="logemail" data-toggle="modal" data-target="#exampleModal">
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
          <a href=""><Link to='/'>Home</Link> </a>
          <a href= "" > <Link to='/mobile'>Mobile</Link></a>
          <a href= "" > Tablets</a>
      </div>

      <div>
          <h1><b>Amazon, Android, Samsung Galaxy Tablets</b></h1>
      </div>

      <div>
        <img src={Tab1} />
        <img src={Tab6} />
        <img src={Tab3} />
        <img src={Tab5} />
        <img src={Tab7} />
        
      </div>
     
      <div className="largecard"  style={{height:"500px"}}>
  <img src={Tab3} className="card-img-top2" alt="..." />
  <div className="card-body">
    <p className="card-text"><b>Rs: 10000</b> <br/> Nokia Mobile available.</p>
  </div>
  </div>


  <div className="largecard"  style={{height:"500px"}}>
  <img src={Tab2} className="card-img-top2" alt="..." />
  <div className="card-body">
    <p className="card-text"><b>Rs: 10000</b> <br/> Nokia Mobile available.</p>
  </div>
  </div>

  <div className="largecard"  style={{height:"500px"}}>
  <img src={Tab4} className="card-img-top2" alt="..." />
  <div className="card-body">
    <p className="card-text"><b>Rs: 10000</b> <br/> Nokia Mobile available.</p>
  </div>
  
</div>

<div className="largecard"  style={{height:"500px"}}>
  <img src={Tab5} className="card-img-top2" alt="..." />
  <div className="card-body">
    <p className="card-text"><b>Rs: 10000</b> <br/> Nokia Mobile available.</p>
  </div>
  
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
export default Tablet;
