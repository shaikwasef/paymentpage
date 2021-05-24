const totalPriceReducer = (state = 0 ,action) => {
    switch (action.type){
        case "UPDATE_TOTAL_PRICE":
            return action.payload;
        default :
            return state;
    }
}

export default totalPriceReducer;