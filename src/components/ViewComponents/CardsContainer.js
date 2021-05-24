import React, { useEffect } from 'react';
import Card from './CardComponents/Card.js'
import cardsData from '../../assets/data.json'
import "./CardsContainer.css"
import { useDispatch } from 'react-redux';
import updateCartList from '../../actions/updateCartList.js';

function CardsContainer() {
    const dispatch = useDispatch();

    useEffect(() => {
        let itemCart = new Map(JSON.parse(sessionStorage.getItem('itemCart')));
        dispatch(updateCartList([...itemCart]));
    },[dispatch])

    const cards = cardsData.map((cardData) => {
       return  <Card key = {cardData.id} cardData = {cardData} />
    })


    return (
        <div className="cards-container">
            {cards}
        </div>
    );
}

export default CardsContainer;