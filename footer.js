import React from "react"
import Mobile from "./mob"
import Car from "./car"
import Tablet from "./tablet"
import Furniture from './furniture';
import Curtains from './curtains';
import {Link} from 'react-router-dom'

class Footer extends React.Component{
    render(){
        return(
            <div className="mainTb">
                <tr>
                    <th  className="thRow">Popular Categories</th>
                    <th  className="thRow">Trending Searches</th>
                    <th  className="thRow">About us</th>
                    <th  className="thRow">OLX</th>

                    
                </tr>
                <tr>
                    <td  className="tbRow"><a href="#" className="linking"><Link to='/car'>Cars</Link></a></td>
                    <td  className="tbRow"><a href="#" className="linking"><Link to='/curtains'>Curtains</Link></a></td>
                    <td  className="tbRow"><a href="#" className="linking">About OLX Group</a></td>
                    <td  className="tbRow"><a href="#" className="linking">Help</a></td>
                </tr>

                <tr>
                    <td  className="tbRow"><a href="#" className="linking"><Link to='/furniture'>Furniture</Link></a></td>
                    <td  className="tbRow"><a href="#" className="linking"><Link to='/tablet'>Tablet</Link></a></td>
                    <td  className="tbRow"><a href="#" className="linking">OLX Blog</a></td>
                    <td  className="tbRow"><a href="#" className="linking">Sitemap</a></td>
                </tr>

                <tr>
                    <td  className="tbRow"><a href="#" className="linking"><Link to='/car'>Cars</Link></a></td>
                    <td  className="tbRow"><a href="#" className="linking"><Link to='/mobile'>Mobile</Link></a></td>
                    <td  className="tbRow"><a href="#" className="linking">Contact Us</a></td>
                    <td  className="tbRow"><a href="#" className="linking">Legal and Privacy Information</a></td>
                </tr>

                
                <tr>
                    <td  className="tbRow"><a href="#" className="linking"><Link to='/mobile'>Mobile Phone</Link></a></td>
                    <td  className="tbRow"><a href="#" className="linking"></a></td>
                    <td  className="tbRow"><a href="#" className="linking">OLX for Businesses</a></td>
                     
                </tr>
            </div>
        )
        
    }
}


class Footer2 extends React.Component{
    render(){
        return(
            <div className="foot">
                <h5>Other Countries  India - South Africa - Indonesia</h5>
                 <h5>Free Classified in Pakistan .@2006-2020 OLX</h5>
            </div>
        )
    }
}
export {
    Footer,
    Footer2
}