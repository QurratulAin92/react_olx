import React from "react"
import {Link} from 'react-router-dom'



class Form extends React.Component{
    render(){
        return(
            <div className="form">
                <h1>POST YOUR AD</h1>
                <div className="category">
                    <h4 className="categoryHead"><b>CHOOSE A CATEGORY</b></h4>

                    <div className="btn-group dropright list">
                  <button type="button" id="mob"className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mobiles
                  </button>
                  <div className="dropdown-menu">
                     <Link to="/mainform"><button className="items">Mobile</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Tablet</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Accessories</button></Link>
  
               </div>
               </div>

               <br/>

               
               <div className="btn-group dropright">
                  <button type="button" id="vehicles" className="btn btn-secondary dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Vehicles
                  </button>
                  <div className="dropdown-menu">
                    <Link to="/mainform"><button className="items">Cars</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Rickshaws</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Boats</button></Link>
                     <br/>  
  
                     </div>
               </div>
             <br/>

            <div className="btn-group dropright">
                  <button type="button" id="salePro" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Property for sale
                  </button>
                  <div className="dropdown-menu">
                    <Link to="/mainform"><button className="items">Lands</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Plots</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Houses</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Portions and floors</button></Link>
              
               
            </div>
                </div>
                 <br/>

                <div className="btn-group dropright">
                  <button type="button"id="rentPro" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Property for rent
                  </button>
                  <div className="dropdown-menu">
                  <Link to="/mainform"><button className="items">Lands</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Plots</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Houses</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Portions and floors</button></Link>
              
               
                  </div>
                </div>
                <br/>

                <div className="btn-group dropright">
                  <button type="button" id="elec"className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Electronic and Home Appliances
                  </button>
                  <div className="dropdown-menu">
                  <Link to="/mainform"><button className="items">Computer</button></Link>
                     <br/>
                     <Link to="/mainform"> <button className="items">TV-Video-Audio</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Camera</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Generators</button></Link>
              
               
                  </div>
                </div>
                <br/>

          <div className="btn-group dropright">
          <button type="button" id="bike" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Bikes
         </button>
         <div className="dropdown-menu">
         <Link to="/mainform"><button className="items">Motorcycles</button></Link>
          <br/>
          <Link to="/mainform"><button className="items">Bicycles</button></Link>
          <br/>
          
        </div>
          </div>
          <br/>
          
          <div className="btn-group dropright">
                  <button type="button" id="fur" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Furniture and Home Decors
                  </button>
                  <div className="dropdown-menu">
                  <Link to="/mainform"><button className="items">Paintings And Mirrors</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Office Furniture</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Curtains and Blinds</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Other Household Items</button></Link>
              
               
                  
                </div>
                </div>
                <br />
                
                <div className="btn-group dropright">
                  <button type="button" id="mob1"className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mobiles
                  </button>
                  <div className="dropdown-menu">
                     <button className="items">Mobile</button>
                     <br/>
                     <button className="items">Tablet</button>
                     <br/>
                     <button className="items">Accessories</button>
  
               </div>
               </div>

               <br/>

               
               <div className="btn-group dropright">
                  <button type="button" id="vehicles1" className="btn btn-secondary dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Vehicles
                  </button>
                  <div className="dropdown-menu">
                     <button className="items">Cars</button>
                     <br/>
                     <Link to="/mainform"></Link><button className="items">Rickshaws</button>
                     <br/>
                     <Link to="/mainform"></Link><button className="items">Boats</button>
                     <br/>  
  
                     </div>
               </div>
             <br/>

            <div className="btn-group dropright">
                  <button type="button" id="salePro1" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Property for sale
                  </button>
                  <div className="dropdown-menu">
                  <Link to="/mainform"><button className="items">Lands</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Plots</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Houses</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Portions and floors</button></Link>
              
               
            </div>
                </div>
                 <br/>

                <div className="btn-group dropright">
                  <button type="button"id="rentPro1" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Property for rent
                  </button>
                  <div className="dropdown-menu">
                  <Link to="/mainform"><button className="items">Lands</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Plots</button></Link>
                     <br/>
                     <Link to="/mainform"> <button className="items">Houses</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Portions and floors</button></Link>
              
               
                  </div>
                </div>
                <br/>

                <div className="btn-group dropright">
                  <button type="button" id="elec1"className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Electronic and Home Appliances
                  </button>
                  <div className="dropdown-menu">
                  <Link to="/mainform"><button className="items">Computer</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">TV-Video-Audio</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Camera</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Generators</button></Link>
              
               
                  </div>
                </div>
                <br/>

          <div className="btn-group dropright">
          <button type="button" id="bike1" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Bikes
         </button>
         <div className="dropdown-menu">
         <Link to="/mainform"></Link><button className="items">Motorcycles</button>
          <br/>
          <Link to="/mainform"></Link><button className="items">Bicycles</button>
          <br/>
          
        </div>
          </div>
          <br/>
          
          <div className="btn-group dropright">
                  <button type="button" id="fur1" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Furniture and Home Decors
                  </button>
                  <div className="dropdown-menu">
                  <Link to="/mainform"><button className="items">Paintings And Mirrors</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Office Furniture</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Curtains and Blinds</button></Link>
                     <br/>
                     <Link to="/mainform"><button className="items">Other Household Items</button></Link>
              
               
                  </div>
                </div>
                </div>
                </div>
           

        )
    }
    
}

export default Form;