export const updateTotalPrice = (totalPrice) => {
    return {
        type : 'UPDATE_TOTAL_PRICE',
        payload : totalPrice
    }
}

export const updateSavings = (totalSavings) => {
    return {
        type : 'UPDATE_SAVINGS',
        payload : totalSavings
    }
}