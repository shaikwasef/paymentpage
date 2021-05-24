import React , {useEffect} from 'react';
import HomeNavigator from "./HomeNavigator"
import OrderSummary from "./OrderSummary"
import OrderContainer from "./OrderContainer"
import updateCartList from "../../actions/updateCartList"
import { useDispatch } from 'react-redux';
import "./Summary.css"
import { updateSavings, updateTotalPrice } from '../../actions/priceCalculator';

function Summary(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        let itemCart = new Map(JSON.parse(sessionStorage.getItem('itemCart')));
        let total = 0;
        let savings = 0;
        for(const item of [...itemCart]){
            total += (item[1].quantity)*(item[1].final_price);
            savings += (item[1].quantity)*(item[1].original_price - item[1].final_price);
        }
        dispatch(updateTotalPrice(total));
        dispatch(updateSavings(savings));
        dispatch(updateCartList([...itemCart]));
    },[dispatch])


    return (
        <div className = "summary-container">
            <HomeNavigator />
            <OrderSummary/>
            <OrderContainer/>
        </div>
    );
}

export default Summary;