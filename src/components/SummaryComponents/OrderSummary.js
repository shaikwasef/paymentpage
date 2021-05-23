import React, { useEffect, useState } from 'react';
import "./OrderSummary.css"

function OrderSummary(props) {

    const [cartQuantity ,setCartQuantity] = useState(0);

    useEffect(() => {
        const netCartQuantity = JSON.parse(sessionStorage.getItem('netCartQuantity'));
        setCartQuantity(netCartQuantity);
    },[])

    return (
        <div className = "order-summary">
            {`Order Summary ( ${cartQuantity} items )`}
        </div>
    );
}

export default OrderSummary;