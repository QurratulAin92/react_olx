import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'


class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <b>All CATEGORIES </b>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
         <div>
          <h4 className="dropdown-item"><b>Vehicles</b></h4>
          <a className="dropdown-item" href="#"><Link to='/slide5'>Bikes</Link></a>
          <a className="dropdown-item" href="#">Rickshows</a>
          <a className="dropdown-item" href="#">Buses and Vans</a>
          <a className="dropdown-item" href="#"><Link to='/car'>Cars Accessories</Link></a>
          </div>
          <div>
          <h4 className="dropdown-item"><b>Mobiles</b></h4>
          <a className="dropdown-item" href="#"><Link to='/mobile'>Mobile Phones</Link></a>
          <a className="dropdown-item" href="#"><Link to='/tablet'>Tablets</Link></a>
          <a className="dropdown-item" href="#"> Accessories</a>
          </div>
          <div>

          <h4 className="dropdown-item"><b>Furniture and Home Decor</b></h4>
          <a className="dropdown-item" href="#">Other household Items</a>
          <a className="dropdown-item" href="#"><Link to='/furniture'>Other Furniture</Link></a>
          <a className="dropdown-item" href="#"><Link to='/curtains'>Curtains and Blinds</Link></a>
          <a className="dropdown-item" href="#">Painting and Mirrors</a>
          </div>
        </div>
        
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#"><Link to='/mobile'>Mobile Phones</Link> <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to='/car'>Cars</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to='/tablet'>Tablets</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to='/furniture'>Furniture</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to='/curtains'>Curtains</Link></a>
      </li>
    </ul>
  </div>
</nav>
        )
    }
}

export default Header;