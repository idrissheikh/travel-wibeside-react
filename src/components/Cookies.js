
import React from 'react'
import './Cookies.css'

function Cookies() {
  return (
    <div className='cookies-card'>
        <p className="title">Cookies content</p>
        <p className="info">We use cookies to personalise content and ads, to provide social media features and to analyse our traffic.
            <a href='#'className='a' >Read more</a> </p>
            <button className="cbtn">
                Accept All
            </button>
            <a href='#' className='setting'>Cookies settings</a>

    </div>
  )
}

export default Cookies