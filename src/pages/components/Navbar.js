import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link" style={{ fontSize: '1.2rem' }} tabIndex="0">Home</Link>
        </li>
        <li className="nav-item">
          <div className="dropdown">
            <Link to="" className="dropbtn" style={{ fontSize: '1.2rem' }} tabIndex="0"><strong>Charts</strong></Link>
            <div className="dropdown-content">
              <li><Link to="/Chart1">Chart1</Link></li>
              <li><Link to="/Chart2">Chart2</Link></li>
              <li><Link to="/Chart3">Chart3</Link></li>
              <li><Link to="/Chart4">Chart4</Link></li>
              <li><Link to="/Chart5">Chart5</Link></li>
              <li><Link to="/ROCYOUDEN">Plot of ROC & Youden's</Link></li>
            </div>
          </div>
        </li>
  
        <li className="nav-item">
          <Link to="/Colab" className="nav-link" style={{ fontSize: '1.2rem' }} tabIndex="0">About Us</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;