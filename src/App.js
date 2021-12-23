import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
// import Navbar from "./components/Navbar";
import Home from './components/Home';
import Cart from './components/Cart';
import Profile from './components/Profile';
import userImg from './images/user.png'; 
import cartImg from './images/cart.png'; 

function App() {
  const [showProfile,setShowProfile] = useState(false);
  const [cart,setCart] = useState([]);
  return (
      <>
        {/* <Home /> */}
        <Router>
          <div className="App">
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
                              <Link className="nav-link cartImg" to="/cart"><img src={cartImg} /></Link>
                          </li>
                          <li className="nav-item">
                              <button className='nav-link profile-btn' onClick={()=>{
                                if(showProfile === false){
                                  setShowProfile(true);
                                }else if(showProfile){
                                  setShowProfile(false);
                                }}}><img src={userImg} /></button>
                          </li>
                      </ul>
                  </div>
              </div>
            </nav>
            {showProfile ? <Profile /> : null}
            <Switch>
                  <Route exact path='/'><Home cart={cart} setCart={setCart} /></Route>
                  <Route exact path='/cart'><Cart cart={cart} setCart={setCart}/></Route>
                  <Route exact path='/profile'><Profile /></Route>
            </Switch>
          </div>
       </Router>
      </> 
  );
}

export default App;
