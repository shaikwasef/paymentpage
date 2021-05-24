import React from 'react';
import Button from '@material-ui/core/Button';
import './AddMoreItems.css'
import { useHistory } from 'react-router';

function AddMoreItems(props) {
    const history = useHistory();
    return (
        <Button color = "primary" 
         className= "add-items-container"
         onClick = {() => history.push('/')} >
            + Add More Items
        </Button>
    );
}

export default AddMoreItems;