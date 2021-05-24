const savingsPriceReducer = (state = 0 ,action) => {
    switch (action.type){
        case "UPDATE_SAVINGS":
            return action.payload;
        default :
            return state;
    }
}

export default savingsPriceReducer;