import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import "./HomeNavigator.css"

function HomeNavigator(props) {
    return (
        <Button className="navigator-container"  >
            <KeyboardBackspaceIcon style={{marginRight:'10px'}}/>
             Back To Home
        </Button>
    );
}

export default HomeNavigator;