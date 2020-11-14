import React, { Component } from 'react';
import Pic from './images/Capture1.PNG';
import Pic2 from './images/img1.jpg'
import Pic3 from "./images/Capture4.PNG"


class Picture extends Component {
    render(){
        return(
           
                <img src={Pic} alt="" className="pic"/>
        
        )
    }
}

class Picture2 extends Component {
    render(){
        return(
              <img src={Pic2} className="pic2"/>
        )
    }
}

class Picture3 extends Component {
    render(){
        return(
              <img src={Pic3} className="pic3"/>
        )
    }
}

 export {
     Picture,
     Picture2,
     Picture3
 }