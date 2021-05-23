import React , {useEffect, useState} from 'react';
import CardInfo from './CardInfo'
import Button from '@material-ui/core/Button';
import addToCart from '../../../actions/addToCart'
import AdderSubtractor from './AdderSubtractor';
import { useDispatch } from 'react-redux';
import addToOrder from "../../../utils/addToOrder"
import './Card.css';

function Card({cardData}) {
    const [cartState,setCardState] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        let itemCart = new Map(JSON.parse(sessionStorage.getItem('itemCart')));
        if(!itemCart.size) return;
        const itemDetails = itemCart.get(cardData.name);
        itemDetails !== undefined ? setCardState(itemDetails.quantity) : setCardState(0);
    },[cardData.name])

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
        addToOrder(cardData.name,quantity,cardData.final_price);
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
            <img className = "card-image" alt={cardData.name} src={cardData.img_url}/>
            <CardInfo cardDataInfo={cardData}/>
            {!cartState  ?<Button color = "secondary" className="add-cart-button" onClick = {handleIncrement}>
                    Add to cart
                </Button>  
                :
                <AdderSubtractor onIncrement={handleIncrement} onDecrement={handleDecrement} quantity={cartState}/>
            }
        </div>
    );
}

export default Card;
