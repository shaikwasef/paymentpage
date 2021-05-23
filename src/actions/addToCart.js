export const addToCart = (quantity) => {
    return {
        type : "ADD_TO_CART",
        payload : quantity
    }
}