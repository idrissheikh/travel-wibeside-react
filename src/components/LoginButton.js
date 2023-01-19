import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Button.css';


const LoginButton = () => {

  const{loginWithRedirect, isAuthenticated} = useAuth0();

  return (
   !isAuthenticated && (
       <button className="btn--outline" onClick={()=> loginWithRedirect()}>
       Sign In
   </button>
   )
   
  )
};

export default LoginButton;