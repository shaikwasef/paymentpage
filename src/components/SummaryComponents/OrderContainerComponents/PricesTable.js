import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import './Table.css'
import './PricesTable.css'



export default function PricesPane() {
  const cartItems = useSelector(state => state.updateCartReducer);
  const totalPrice = useSelector(state => state.totalPriceReducer);
  const totalSavings = useSelector(state => state.savingsPriceReducer);
  const deliveryFee = window.deliveryFee;
  const taxes = window.taxes;

  const pricePane = cartItems.map((item,index) => {
      const {quantity,final_price} = item[1];
      const price = quantity*final_price ;
      return (
        <TableRow key = {index}>
            <TableCell align="left">{`${quantity} \u00A0X\u00A0  $ ${final_price.toFixed(2)} `}</TableCell>
            <TableCell align="right">{`$  ${price.toFixed(2)} `}</TableCell>
         </TableRow>
      )
  });

  const showSavings = () => {
    const savings = Math.abs(totalSavings).toFixed(2);
    if(!totalSavings) return '0';
    return `-\u00A0 $ ${savings}`;
  }

  const showTotal = () => {
    const total = Math.abs(totalPrice) - totalSavings + deliveryFee + taxes;
    return `$ ${total.toFixed(2)}`
  }

  return (
    <TableContainer style = {{backgroundColor : 'inherit'}}  component={Paper}>
      <Table className="table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className = "price-heading"align="left" colSpan={2}>Price Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {pricePane}
        </TableBody>
        <TableBody className="final-price">
            <TableRow >
              <TableCell align="left">Total Savings</TableCell>
              <TableCell align="right" style = {{color : '#03c6a8'}}>{showSavings()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Delivery Fee</TableCell>
              <TableCell align="right">{`$ ${deliveryFee.toFixed(2)}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Taxes and Charges &nbsp;
              <ErrorOutlineIcon style = {{fontSize : 'medium' , verticalAlign:'text-top'}} /></TableCell>
              <TableCell align="right">{`$ ${taxes.toFixed(2)}`}</TableCell>
            </TableRow>
        </TableBody>
        <TableBody className="to-pay">
            <TableRow >
              <TableCell align="left">To Pay</TableCell>
              <TableCell align="center" style = {{fontSize : '16px'}}>{showTotal()}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell className = "price-heading"align="center" colSpan={2}>
              <Button  className="place-order" >
                    PLACE ORDER
                </Button>  
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
