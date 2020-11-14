import React from 'react'

import Card from "./images/card_1.PNG"
import Card2 from "./images/card_2_1.PNG"
import Card3 from "./images/card_3_1.PNG"
import Card4 from "./images/card_4_1.PNG"
import Card5 from "./images/card_5_1.PNG"
import Card6 from "./images/card_6_1.PNG"
import Card7 from "./images/card_7_1.PNG"
import Card8 from "./images/card_8_1.PNG"
import './App.css';
import {Link} from 'react-router-dom'
import { Router } from 'react-router-dom'


class Cards extends React.Component{
    render(){
        return(
          
           <div>
                <div className="lastSearch">
              
               <h3 className="heading">Based on your last search</h3>
               <div className="maindiv"> 
            
            <Link to = "/slide2"><span className="card"  style={{width: '18rem'}}>
  <img src={Card} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text"><b>Rs: 1800</b> <br/>Spy Camera on sale avaialable.</p>
  </div>
</span>
</Link>

 <Link to = "/slide3"><span className="card"  style={{width: '18rem'}}>
  <img src={Card2} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text"><b>Rs: 7000</b> <br/> Aseel murga on sale avaialable.</p>
  </div>
</span>
</Link>


<Link to = "/slide1"> <span className="card"  style={{width: '18rem'}} >
  <img src={Card3} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text"><b>Rs: 5000</b> <br/> <Link to = "/slide1"> OPPO Mobile available.</Link></p>
  </div>
</span>
</Link>
<Link to = "/slide4"><span className="card"  style={{width: '18rem'}}>
  <img src={Card4} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text"><b>Rs: 500000</b> <br/> CULTUS CAR available.</p>
  </div>
</span>
</Link> 
</div>
</div >

<br/>

<div className ="lastSearch">

<h3>Fresh Recommandations</h3>
<div className="maindiv">

<Link to = "/slide4"><span className="card"  style={{width: '18rem'}}>
  <img src={Card5} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text"><b>Rs: 500000</b> <br/> CULTUS CAR available.</p>
  </div>
</span>
</Link>

<Link to = "/slide2"><span className="card"  style={{width: '18rem'}}>
  <img src={Card6} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text"><b>Rs: 30000</b> <br/> Vivo Camera available.</p>
  </div>
</span>
</Link>

<Link to = "/slide5"><span className="card"  style={{width: '18rem'}}>
  <img src={Card7} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text"><b>Rs: 50000</b> <br/> Motorcycle available.</p>
  </div>
</span>
</Link>

<Link to = "/slide6"><span className="card"  style={{width: '18rem'}}>
  <img src={Card8} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text"><b>Rs: 200000</b> <br/> Wooden Furniture available.</p>
  </div>
</span>
</Link>
</div>
</div>

</div>




        )

        
    }
}

export default Cards;
