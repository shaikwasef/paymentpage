import React from 'react';
import MostPopular from './MostPopular'
import CardsContainer from './CardsContainer'
import './ViewContainer.css'

function ViewContainer(props) {
    return (
        <div className="view-container">
            <MostPopular/>
            <CardsContainer/>
        </div>
    );
}

export default ViewContainer;