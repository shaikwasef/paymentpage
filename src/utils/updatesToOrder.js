const updatesToOrder = (name,quantity,price) => {
    let itemCart = new Map(JSON.parse(sessionStorage.getItem('itemCart')));
    const newCartDetails = getItemObj(quantity,price);
    itemCart.set(name,newCartDetails);
    sessionStorage.setItem('itemCart',JSON.stringify([...itemCart]));
    return [...itemCart];
}


const getItemObj = (itemQuantity,itemPrice) => {
    return {
        quantity : itemQuantity ,
        price : itemPrice
    }
}

export default updatesToOrder;