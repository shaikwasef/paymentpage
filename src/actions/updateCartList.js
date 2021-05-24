const updateCartList = (cart) => {
    return {
        type : "UPDATE_CART_LIST",
        payload : cart,
    }
}

export default updateCartList;