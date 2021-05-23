import React, { useEffect , useState } from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import avatar from '../../assets/avatar.jpg'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux';
import {addToCart} from "../../actions/addToCart"
import './CartContainer.css'
import { useHistory ,useLocation } from 'react-router';

function CartContainer(props) {
    const netCartQuantity = useSelector(state => state.cartReducer);
    const [showCart,setShowCart] = useState(true);
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
  
    useEffect(() => {
      pathname === '/' ? setShowCart(true) : setShowCart(false)
    },[pathname])
    
    useEffect(() => {
        const netCartQuantity = JSON.parse(sessionStorage.getItem('netCartQuantity'));
        dispatch(addToCart(netCartQuantity));
    },[dispatch])


    return (
        <div className="cart-container">
            { showCart && 
            <Badge badgeContent={netCartQuantity} 
                color = "error"
                className = "cart"
                onClick = {() => history.push('/summary')}>
                <ShoppingCartOutlinedIcon style={{paddingTop:'2px'}} />
            </Badge>
                }
            <img src = {avatar} alt="avatar" className="avatar"/>
          </div>
    );
}

export default CartContainer;