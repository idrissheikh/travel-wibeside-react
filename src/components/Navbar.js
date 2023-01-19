import React , {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import  "./Navbar.css";
import { Button } from './Button.js';
import Buttons from './Buttons';





function Navbar() {


    const[click ,setClick]=useState(false);
    const[button, setButton]= useState(true);

    const handleClick =()=> setClick(!click);  
    const closemobileMenu =()=> setClick(false) ;

    const showButton = ()=>{
        if(window.innerWidth <= 960){

            setButton(false);  
        }else{
            setButton(true);
        }
    }


    useEffect(() => {
        showButton();

    }, [])

    window.addEventListener(`resize`, showButton);


    return (
        <>
             <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closemobileMenu}>
                    NG <i className="fab fa-typo3" />
                    </Link>
                     <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closemobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closemobileMenu}>
                                Services
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/hotel" className="nav-links" onClick={closemobileMenu}>
                                Hotel
                            </Link>
                        </li>

                        
                    </ul>
                    {button && <Buttons className="btn--outline" />}

                 </div>
             </nav>
        </>
        
    
    )
}

export default Navbar
