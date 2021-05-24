import React from 'react';
import './CardInfo.css'

function CardInfo({cardDataInfo}) {
    return (
        <div className="card-info-container">
            <article className="card-title">
                <p className="card-name">{cardDataInfo.name}</p>
               {cardDataInfo.original_price ? 
               <div className="price"><p className="original-price">{`$ ${cardDataInfo.original_price}.00`}</p>
                <p className="final-price">{`$ ${cardDataInfo.final_price}.00`}</p></div>
                 : <p className="final-price">{`$ ${cardDataInfo.final_price}.00`}</p> }
            </article>
            <p className="card-description">{cardDataInfo.description}</p>
        </div>
    );
}

export default CardInfo;