import React from 'react';
import PricesTable from './PricesTable'
import './PricesPane.css'

function PricesPane(props) {
    return (
        <div className="prices-pane">
            <PricesTable/>
        </div>
    );
}

export default PricesPane;