import React, { Component } from 'react';
import LogoImage from './images/Capture3.png'


class Logo extends Component {
    render(){
        return(
           
                <img src={LogoImage} alt="" className="logoPic"/>
        
        )
    }
}

 export default Logo;