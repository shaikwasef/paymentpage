import React from 'react';
import AddMoreItems from './AddMoreItems';
import ItemTable from './ItemTable'
import './OrdersTable.css'

function Orders(props) {
    return (
        <div className = "orders">
           <ItemTable/>
           <AddMoreItems/>
        </div>
    );
}

export default Orders;