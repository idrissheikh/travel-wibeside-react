import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

function Cards() {
    return (
        <div className="cards">
            <h1>What you do think about this? </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/Lofoten.jpeg"
                        label="Adventure"
                        text="De vakreste øyene i verden"
                        path="/products"
                        />
                        <CardItem 
                        src="images/t.jpeg"
                        label="Adventure"
                        text="Explore one of the best views in Norway."
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/Cruise_Ship.jpeg"
                        label="Adventure"
                        text="Cruises in the most beautiful strait in the world"
                        path="/sign-up"
                        />
                        <CardItem 
                        src="images/Nordlys.jpeg"
                        label="Adventure"
                        text=" Aroura Light in Norway"
                        path="/contact-us"
                        />
                        <CardItem 
                        src="images/IMG_8158.jpg"
                        label="Adventure"
                        text="Explore the hidden waterfall in Norway."
                        path="/services"
                        />
                        
                    </ul>
                </div> 
            </div>
        </div>
    )
}

export default Cards
