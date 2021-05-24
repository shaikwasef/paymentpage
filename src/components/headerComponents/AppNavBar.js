import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import hapPayLogo from '../../assets/hapPayLogo.svg'
import CartContainer from './CartContainer'
import './AppNavBar.css'



export default function AppNavBar() {


  return (
    <div className="root" >
      <AppBar position="fixed" className="bar" >
        <Toolbar>
          <Typography className= "title" >
            <img src ={hapPayLogo}  alt ="logo" className = "logo"/>
            Happay
          </Typography>
          <CartContainer/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
