const addToOrder = (itemName , itemQuantity , itemPrice) => {
    let itemCart = new Map(JSON.parse(sessionStorage.getItem('itemCart')));
    if(itemQuantity <=0 ){
        itemCart.delete(itemName);
        return;
    }
    const itemDetails = getItemObj(itemQuantity,itemPrice);
    itemCart.set(itemName,itemDetails);
    sessionStorage.setItem('itemCart',JSON.stringify([...itemCart]));
}

const getItemObj = (itemQuantity,itemPrice) => {
    return {
        quantity : itemQuantity ,
        price : itemPrice
    }
}
export default addToOrder;