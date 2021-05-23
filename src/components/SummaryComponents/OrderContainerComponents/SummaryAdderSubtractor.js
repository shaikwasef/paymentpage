import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import addToCart from "../../../utils/addToOrder"
import "./SummaryAdderSubtractor.css"

function SummaryAdderSubtractor({name,quantity}) {

    const [itemQuantity , setItemQuantity] = useState(quantity);

    const handleIncrement = () => {
        const incQuantity = itemQuantity+1;
        addToCart(name,incQuantity);
        sessionStorage.setItem(name,incQuantity);
        setItemQuantity(incQuantity);
    } 

    const handleDecrement = () => {
        const decQuantity = itemQuantity - 1 ;
        if(!decQuantity) return;
        addToCart(name,decQuantity);
        sessionStorage.setItem(name,decQuantity);
        setItemQuantity(decQuantity);
    }

    return (
        <Paper className="sum-adder-subtractor-container">
            <Button type="reset"  variant = "contained"  color = "primary"
            onClick = {handleDecrement}
            style = {{backgroundColor:'#616161'}}>
                 -
            </Button>
        <Box className="sum-adder-subtractor-input">{itemQuantity}</Box>
            <Button type="reset"  variant = "contained" color = "primary"
            onClick = {handleIncrement}
            style = {{backgroundColor:'#616161'}} >
                +
            </Button>
        </Paper>
    );
}

export default SummaryAdderSubtractor;
