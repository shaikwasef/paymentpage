import React from 'react';
import HomeNavigator from "./HomeNavigator"
import OrderSummary from "./OrderSummary"
import OrderContainer from "./OrderContainer"
import "./Summary.css"

function Summary(props) {
    return (
        <div className = "summary-container">
            <HomeNavigator/>
            <OrderSummary/>
            <OrderContainer/>
        </div>
    );
}

export default Summary;