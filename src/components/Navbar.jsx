import React from "react";
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import { Link } from "react-router-dom";

const Navbar = (props) => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className='container'>
                  <Link className="navbar-brand" to="/">
                      <h1>ziroh-mail-gateway-demo</h1>
                  </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>  

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item active">
                              <Link className="nav-link" to="/">Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link cartImg" to="/cart"><img src="./images/cart.png" />{props.cart.length > 0 ? <span className="cart-num">{props.cart.length}</span> : null} </Link>
                          </li>
                          <li className="nav-item">
                              <button className='nav-link profile-btn' onClick={()=>{
                                if(props.showProfile === false){
                                  props.setShowProfile(true);
                                }else if(props.showProfile){
                                  props.setShowProfile(false);
                                }}}><img src='./images/user.png' /></button>
                          </li>
                      </ul>
                  </div>
              </div>
            </nav>
        </>
    );
}

export default Navbar;