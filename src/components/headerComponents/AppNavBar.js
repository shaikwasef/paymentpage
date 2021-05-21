import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import hapPayLogo from '../../assets/hapPayLogo.svg'
import CartContainer from './CartContainer'
import { StylesProvider } from '@material-ui/core/styles';
import './AppNavBar.css'


export default function AppNavBar() {

  return (
    <div className="root" >
      <StylesProvider injectFirst>
      <AppBar position="fixed" className="bar" >
        <Toolbar>
          <Typography className= "title" >
            <img src ={hapPayLogo} className = "logo"/>
            Happay
          </Typography>
          <CartContainer/>
        </Toolbar>
      </AppBar>
      </StylesProvider>
    </div>
  );
}
