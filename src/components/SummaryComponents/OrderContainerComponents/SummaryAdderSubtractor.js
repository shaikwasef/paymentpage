import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import addToOrder from "../../../utils/addToOrder"
import updatesToOrder from "../../../utils/updatesToOrder"
import updateCartList from "../../../actions/updateCartList"
import "./SummaryAdderSubtractor.css"
import { useDispatch } from 'react-redux';

function SummaryAdderSubtractor({name,quantity,price}) {
    const [itemQuantity , setItemQuantity] = useState(quantity);
    const dispatch = useDispatch();

    const makeUpdatesToCart = (quantity) => {
        addToOrder(name,quantity,price);
        const updatedCart = updatesToOrder(name,quantity,price);
        dispatch(updateCartList(updatedCart));
        setItemQuantity(quantity);
    }

    const handleIncrement = () => {
        const incQuantity = itemQuantity+1;
        makeUpdatesToCart(incQuantity);
    } 

    const handleDecrement = () => {
        const decQuantity = itemQuantity - 1 ;
        if(!decQuantity) return;
        makeUpdatesToCart(decQuantity);
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
