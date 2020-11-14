import React from "react"
import {Link} from 'react-router-dom'
import Form from "./form"
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo2 from "./images/logo.png"
import firebase from "./config/firebase"

class Mainform extends React.Component{
    constructor(){
        super()
        this.state={
            file:null
        }
    }
    upload_file=()=>{
      var ref = firebase.storage().ref().child(`images/${this.state.file.name}`).put(this.state.file)
  
    }

  
    render(){
        return(
            <div className="form">
            <h1>POST YOUR AD</h1>
            <div className="category1">
            <h4 className="categoryHead"><b>SELECTED CATEGORY</b></h4>
            <br/>
            <Link to = "/form"><h5><b>Change</b></h5></Link>
            <br/>
            </div>
            <div className="detail">
            <h4 className="categoryHead"><b>INCLUDE SOME DETAILS</b></h4>

            <p>Condition</p>
            <button>Used</button>
            <button>New</button>

            <br/><br/>

            <p className="adTitle">Ad title</p>
             <input className="titleBox"/>

             <br/><br/>

             <p className="adTitle">Type(Company)</p>
             <input className="titleBox"/>

             <br/><br/>

             <p className="adTitle">Discription</p>
             <textarea className="disBox"/>
             <p>Include condition, features and reason for selling</p>

             </div>

             <div className="detail">
             <h4 className="categoryHead"><b>SET A PRICE</b></h4>

             <p className="adTitle">Price</p>

             <input className="titleBox" placeholder="Rs"/>

             </div>
             <div className="detail">
             <h4 className="categoryHead"><b>UPLOAD IMAGE</b></h4>

             <p className="adTitle">Price</p>

             <input type="file" className="upload" onChange={(e)=>this.setState({file:e.target.files[0]})}/>
             
            
             <br/> 
             <button onClick={this.upload_file} className="uploadBtn">UPLOAD</button>

             </div>


             
             <div className="detail">
             <h4 className="categoryHead"><b>CONFIRM YOUR LOCATION</b></h4>

             <button className="li"><b>LIST</b></button>
             <button className="cl"><b>CURRENT LOCATION</b></button>

             <br/><br/>

    <p  className="adTitle">State</p>


    <div class="input-group mb-3">
     <select class="custom-select" id="inputGroupSelect02">
    <option selected></option>
    <option value="1">Azad Kashmir</option>
    <option value="2">Sindh</option>
    <option value="3">Punjab</option>
    <option value="4">Balochistan</option>
    <option value="5">KPK</option>
    <option value="3">Islamabad</option>
    <option value="3">Northern Areas</option>
  </select>
  
</div>
<p  className="adTitle">City</p>


<div class="input-group mb-3">
 <select class="custom-select" id="inputGroupSelect02">
<option selected></option>
<option value="1">Karachi</option>
<option value="2">Lahore</option>
<option value="3">Quetta</option>
<option value="4">Peshawar</option>
<option value="5">Hyderabad</option>
<option value="3">Larkana</option>
<option value="3">Sukkur</option>
<option value="3">Rawalpindi</option>
</select>

</div>
</div>
<div className="detail">
             <h4 className="categoryHead"><b>Review YOUR DETAILS</b></h4>
             <div><img src={Logo2} width="80px" height="80px"/></div>
             <div >
             <p className="name">Name</p>
             <p><input className="titleBox"/></p>
             </div>

             <div>
                 <h6><b>Let's verify your account</b></h6>
                 <p>We will send you a confirmation code by sms on the next step.</p>

                 <p  className="adTitle">Mobile phone number</p>
                 <input placeholder="92" className="titleBox"/>
             </div>

        </div>
        <div className="detail">
            <button className="postNow">Post now</button>
        </div>


            </div>      
        )
    }
}

export default Mainform;
