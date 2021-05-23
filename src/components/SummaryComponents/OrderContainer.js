import React from 'react';
import OrdersTable from './OrderContainerComponents/OrdersTable'
import './OrderContainer.css'
import PricesPane from './OrderContainerComponents/PricesPane';


function OrderContainer(props) {
    return (
        <div className="order-container">
            <OrdersTable/>
            <PricesPane/>
        </div>
    );
}

export default OrderContainer;