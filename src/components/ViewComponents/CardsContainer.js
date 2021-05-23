import React from 'react';
import Card from './CardComponents/Card.js'
import cardsData from '../../assets/data.json'
import "./CardsContainer.css"

function CardsContainer() {

    const cards = cardsData.map((cardData) => {
       return  <Card key = {cardData.id} cardData = {cardData} />
    })

    
    return (
        <div className="cards-container">
            {cards}
        </div>
    );
}

export default CardsContainer;