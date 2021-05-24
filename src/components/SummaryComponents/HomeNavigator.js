import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import "./HomeNavigator.css"
import { useHistory } from 'react-router';

function HomeNavigator(props) {
    const history = useHistory();
    return (
        <Button color = "secondary" className="navigator-container" onClick = {() => history.push('/')} >
            <KeyboardBackspaceIcon style={{marginRight:'10px'}}/>
             Back To Home
        </Button>
    );
}

export default HomeNavigator;