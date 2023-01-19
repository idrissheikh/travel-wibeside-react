import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Button.css'
import '../App.css'
    const LogoutButton = () => {
      const { logout, isAuthenticated } = useAuth0();
      return (
        isAuthenticated && (
          <button className="btn--outline" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Sign Out
        </button>
        )
        
       )
};


export default LogoutButton;