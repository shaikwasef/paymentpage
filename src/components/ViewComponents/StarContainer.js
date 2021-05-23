import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './StarContainer.css'

function StarContainer(props) {
    return (
        <div className="star-container">
            <div className="line"></div>
            <StarBorderIcon className="star" color="primary"/>
            <div className="line"></div>
        </div>
    );
}

export default StarContainer;