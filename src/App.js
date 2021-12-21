import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Cart from './components/Cart';
import Profile from './components/Profile';

function App() {
  return (
      <>
        <Home />
        {/* <Navbar/>
        <Switch >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>*/}
      </> 
  );
}

export default App;
