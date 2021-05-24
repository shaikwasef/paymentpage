import React , {useEffect, useState} from 'react';
import CardInfo from './CardInfo'
import Button from '@material-ui/core/Button';
import addToCart from '../../../actions/addToCart'
import AdderSubtractor from './AdderSubtractor';
import { useDispatch } from 'react-redux';
import addToOrder from "../../../utils/addToOrder"
import Badge from '@material-ui/core/Badge';
import updateCartList from "../../../actions/updateCartList"
import updatesToOrder from '../../../utils/updatesToOrder';
import './Card.css';

function Card({cardData}) {
    const [cartState,setCardState] = useState(0);
    const dispatch = useDispatch();
    const {name,final_price,original_price} = cardData;
    const [discount,setDiscount] = useState(0);

    useEffect(() => {
        if(!original_price) return;
        const discount = 100*(original_price-final_price)/original_price;
        setDiscount(discount);
    },[original_price,final_price]);

    useEffect(() => {
        let itemCart = new Map(JSON.parse(sessionStorage.getItem('itemCart')));
        if(!itemCart.size) return;
        const itemDetails = itemCart.get(name);
        itemDetails !== undefined ? setCardState(itemDetails.quantity) : setCardState(0);
    },[name])

    const storeNetCartQuantity = (quantity) => {
        const netCartQuantity = JSON.parse(sessionStorage.getItem('netCartQuantity'));
        if((cartState ===0 || cartState === null) && quantity === 1){
            sessionStorage.setItem('netCartQuantity',netCartQuantity + 1);
            dispatch(addToCart(netCartQuantity+1));
        }
        if(cartState ===1 && quantity === 0 ){
            sessionStorage.setItem('netCartQuantity',netCartQuantity - 1);
            dispatch(addToCart(netCartQuantity-1));
        }
    }

    const makeUpdatesToCart = (quantity) => {
        addToOrder(name,quantity,final_price,original_price);
        const updatedCartList = updatesToOrder(name,quantity,final_price,original_price);
        dispatch(updateCartList(updatedCartList));
        storeNetCartQuantity(quantity);
        setCardState(quantity);
    }

    const handleDecrement = () => {
        const quantity = cartState-1;
        makeUpdatesToCart(quantity);

    }
    const handleIncrement = () => {
        const quantity = cartState+1;
        makeUpdatesToCart(quantity);
    }
    
      
    return (
            <div className="card-container">  

            {!discount ?  <img className = "card-image" alt={name} src={cardData.img_url}/> :
            <Badge badgeContent={`${discount}% OFF`} > 
                <img className = "card-image" alt={name} src={cardData.img_url}/>
            </Badge>
            }

            <CardInfo cardDataInfo={cardData}/>
            {!cartState  ?<Button color = "primary" 
                className= "add-cart-button" onClick = {handleIncrement}>
                    Add to cart
                </Button>  
                :
                <AdderSubtractor onIncrement={handleIncrement} onDecrement={handleDecrement} quantity={cartState}/>
            }
        </div>
    );
}

export default Card;

