import React from 'react';

import './OrderContainer.css'
import ListContainer from './OrderContainerComponents/ListContainer';

function OrderContainer(props) {
    return (
        <div className="order-container">
            <ListContainer/>
            <div>hi</div>
        </div>
    );
}

export default OrderContainer;