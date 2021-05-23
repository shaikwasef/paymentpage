import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import "./SummaryAdderSubtractor.css"

function SummaryAdderSubtractor(props) {
    return (
        <Paper component="form" className="sum-adder-subtractor-container">
            <Button type="reset"  variant = "contained"  color = "primary"
            style = {{backgroundColor:'#616161'}}>
                 -
            </Button>
        <Box component="div" display="inline" className="sum-adder-subtractor-input">1</Box>
            <Button type="reset" variant = "contained" color = "primary"
            style = {{backgroundColor:'#616161'}} >
                +
            </Button>
        </Paper>
    );
}

export default SummaryAdderSubtractor;
