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
                        src="images/IMG_8158.jpg"
                        label="Adventure"
                        text="Explore the hidden waterfall in Norway"
                        path="/products"
                        />
                        <CardItem 
                        src="images/IMG_8773.jpg"
                        label="Adventure"
                        text="Explore the hidden waterfall in Norway."
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/IMG_8158.jpg"
                        label="Adventure"
                        text=" Aroura Light in Norway"
                        path="/sign-up"
                        />
                        <CardItem 
                        src="images/IMG_8158.jpg"
                        label="Adventure"
                        text=" Aroura Light in Norway"
                        path="/hallo"
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
