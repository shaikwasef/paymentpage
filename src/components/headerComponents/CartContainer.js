import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import avatar from '../../assets/avatar.jpg'
import './CartContainer.css'

function CartContainer(props) {
    return (
        <div className="cart-container">
          <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon style={{paddingTop:'2px'}} />
          </Badge>
          <img src = {avatar} className="avatar"/>
          </div>
    );
}

export default CartContainer;