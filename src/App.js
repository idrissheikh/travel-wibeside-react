import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/Signup";
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Hotel from './components/pages/Hotel';
import Cookies from './components/Cookies';




function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Home} /> 
       <Route path="/sign-up" exact component={SignUp}/> 
       <Route path="/services" component={Services}/> 
       <Route path="/products" component={Products}/> 
       <Route path="/hotel" component={Hotel}/> 

      </Switch>
    </Router>
    <Cookies/>
    </>
  );
}

export default App;
