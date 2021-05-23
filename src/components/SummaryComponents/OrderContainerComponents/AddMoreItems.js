import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './AddMoreItems.css'

function AddMoreItems(props) {
    return (
        <Button color = "secondary"  className= "add-items-container" >
            <AddIcon style = {{fontSize :'medium'}} />
             Add More Items
        </Button>
    );
}

export default AddMoreItems;