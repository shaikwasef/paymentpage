const updatesToOrder = (...updatedQuantity) => {
    const [name,quantity,finalPrice,originalPrice] = updatedQuantity;
    let itemCart = new Map(JSON.parse(sessionStorage.getItem('itemCart')));
    if(quantity <=0 ){
        itemCart.delete(name);
        sessionStorage.setItem('itemCart',JSON.stringify([...itemCart]));
        return [...itemCart];
    }
    const newCartDetails = getItemObj(quantity,finalPrice,originalPrice);
    itemCart.set(name,newCartDetails);
    sessionStorage.setItem('itemCart',JSON.stringify([...itemCart]));
    return [...itemCart];
}


const getItemObj = (itemQuantity,finalPrice,originalPrice) => {
    if(!originalPrice) originalPrice = finalPrice;
    return {
        quantity : itemQuantity ,
        final_price : finalPrice,
        original_price : originalPrice
    }
}

export default updatesToOrder;