import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import "./AdderSubtractor.css"

export default function AdderSubtractor(props) {
    const {onIncrement,onDecrement,quantity} = props;

  return (
    <Paper  className="adder-subtractor-container">
        <Button type="reset" variant="contained" color="primary" onClick = {onDecrement}>
            -
        </Button>
        <Box component="div" display="inline" className="adder-subtractor-input">{quantity}</Box>
        <Button type="reset" variant="contained" color="primary"  onClick = {onIncrement}>
            +
        </Button>
    </Paper>
    
  );
}
