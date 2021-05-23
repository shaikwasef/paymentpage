import React from 'react';
import SummaryAdderSubtractor from "./SummaryAdderSubtractor";
import './ItemContainer.css';

function ItemContainer(props) {
    return (
        <div className = "item-container">

            <h4>1.</h4>
            <h5>Food Card</h5>
            <SummaryAdderSubtractor/>
            <h4>2.</h4>
            <h5>Epic Card</h5>
            <SummaryAdderSubtractor/>
            <h4>3.</h4>
            <h5>Travel Card</h5>
            <SummaryAdderSubtractor/>

        </div>
    );
}

export default ItemContainer;