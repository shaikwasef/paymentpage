import React from 'react';
import AddMoreItems from './AddMoreItems';
import LabelContainer from './LabelContainer'
import ItemContainer from './ItemContainer';
import './ListContainer.css'

function ListContainer(props) {
    return (
        <div>
            <LabelContainer/>
            <ItemContainer/>
            <AddMoreItems/>
        </div>
    );
}

export default ListContainer;