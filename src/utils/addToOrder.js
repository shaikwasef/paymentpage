const addToOrder = (itemName , itemQuantity) => {
    let itemCart = new Map(JSON.parse(sessionStorage.getItem('itemCart')));
    if(itemQuantity <=0 ){
        itemCart.delete(itemName);
        return;
    }
    itemCart.set(itemName,itemQuantity);
    sessionStorage.setItem('itemCart',JSON.stringify([...itemCart]));
}
export default addToOrder;