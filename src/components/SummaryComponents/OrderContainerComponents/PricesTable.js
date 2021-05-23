import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import './Table.css'
import './PricesTable.css'
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';


export default function PricesPane() {
  const cartItems = useSelector(state => state.updateCartReducer);

  const pricePane = cartItems.map((item,index) => {
      const quantity = item[1].quantity;
      const price = item[1].price ;
      const totalPrice = quantity*price ;
      return (
        <TableRow key = {index}>
            <TableCell align="left">{`${quantity} \u00A0X\u00A0  $ ${price}.00 `}</TableCell>
            <TableCell align="right">{`$ ${totalPrice}.00 `}</TableCell>
         </TableRow>
      )
  });

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
              <TableCell align="right">- $18.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Delivery Fee</TableCell>
              <TableCell align="right">$5.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Taxes and Charges &nbsp;
              <ErrorOutlineIcon style = {{fontSize : 'medium' , verticalAlign:'text-top'}} /></TableCell>
              <TableCell align="right">$2.00</TableCell>
            </TableRow>
        </TableBody>
        <TableBody className="to-pay">
            <TableRow >
              <TableCell align="left">To Pay</TableCell>
              <TableCell align="center" style = {{fontSize : '16px'}}>$91.00</TableCell>
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
