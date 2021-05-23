import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./Table.css"
import SummaryAdderSubtractor from './SummaryAdderSubtractor';


export default function ItemTable() {
    const [itemCart , setItemCart] = useState([]);

    useEffect(() => {
        const itemCart = JSON.parse(sessionStorage.getItem('itemCart'));
        setItemCart(itemCart);
    },[])

    const tableItems = itemCart.map((item,index) => {
        return (
            <TableRow key = {index}>
              <TableCell align="center">{`${index+1}.`}</TableCell>
              <TableCell align="center" >{item[0]}</TableCell>
              <TableCell align="center"><SummaryAdderSubtractor name = {item[0]} quantity = {item[1]}/>
              </TableCell>
            </TableRow>
        );
    })

  return (
    <TableContainer component={Paper}>
      <Table className="table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">S. NO.</TableCell>
            <TableCell align="center">ITEMS</TableCell>
            <TableCell align="center">QTY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {tableItems}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
