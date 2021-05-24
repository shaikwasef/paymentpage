const addToOrder = (...args) => {
    const name = args[0];
    const [quantity,finalPrice,originalPrice] = args.splice(1);
    let itemCart = new Map(JSON.parse(sessionStorage.getItem('itemCart')));
    if(quantity <=0 ){
        itemCart.delete(name);
        sessionStorage.setItem('itemCart',JSON.stringify([...itemCart]));
        return [...itemCart];
    }
    const itemDetails = getItemObj(quantity,finalPrice,originalPrice);
    itemCart.set(name,itemDetails);
    sessionStorage.setItem('itemCart',JSON.stringify([...itemCart]));
}

const getItemObj = (quantity,finalPrice,originalPrice) => {
    if(!originalPrice) originalPrice = finalPrice;
    return {
        quantity : quantity ,
        final_price : finalPrice,
        original_price : originalPrice 
    }
}
export default addToOrder;