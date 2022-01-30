import './App.css';
import "./components/Navbar";
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./components/pages/Home"
import SignUp from './components/pages/Signup';
import Services from './components/pages/Services';
import Products from './components/pages/Products';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
       <Route path= "/" exact component={Home}/> 
       <Route path= "/sign-up" exact component={SignUp}/> 
       <Route path= "/services" exact component={Services}/> 
       <Route path= "/products" exact component={Products}/> 

      </Switch>
    </Router>
    </>
  );
}

export default App;
