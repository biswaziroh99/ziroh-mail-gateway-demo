import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Cart from './components/Cart';
import Profile from './components/Profile';

function App() {
  const [showProfile,setShowProfile] = useState(false);
  const [cart,setCart] = useState([]);
  return (
      <>
        {/* <Home /> */}
        <Router>
          <div className="App">
            <Navbar showProfile={showProfile} setShowProfile={setShowProfile} cart={cart}/>
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
