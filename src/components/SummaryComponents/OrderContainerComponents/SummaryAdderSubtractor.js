import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import addToOrder from "../../../utils/addToOrder"
import updatesToOrder from "../../../utils/updatesToOrder"
import updateCartList from "../../../actions/updateCartList"
import {updateTotalPrice,updateSavings} from "../../../actions/priceCalculator"
import "./SummaryAdderSubtractor.css"
import { useDispatch, useSelector } from 'react-redux';

function SummaryAdderSubtractor({name,details}) {
    const totalPrice = useSelector(state => state.totalPriceReducer);
    const totalSavings = useSelector(state => state.savingsPriceReducer); 
    const [itemQuantity , setItemQuantity] = useState(0);
    const dispatch = useDispatch();
    const {quantity,final_price,original_price} = details;

    useEffect(() => setItemQuantity(quantity) , [quantity]);

    const makeUpdatesToCart = (updatedQuantity) => {
        addToOrder(name,updatedQuantity,final_price,original_price);
        const updatedCart = updatesToOrder(name,updatedQuantity,final_price,original_price);
        dispatch(updateCartList(updatedCart));
        setItemQuantity(updatedQuantity);
    }

    const handleIncrement = () => {
        const incQuantity = itemQuantity+1;
        dispatch(updateSavings(totalSavings - (final_price-original_price)));
        dispatch(updateTotalPrice(totalPrice + final_price));
        makeUpdatesToCart(incQuantity);
    } 

    const handleDecrement = () => {
        const decQuantity = itemQuantity - 1 ;
        if(!decQuantity) return;
        dispatch(updateSavings(totalSavings + (final_price-original_price)));
        dispatch(updateTotalPrice(totalPrice - final_price));
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
