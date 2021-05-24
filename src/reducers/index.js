import { combineReducers } from "redux";
import cartReducer from './cartReducer';
import updateCartReducer from './updateCartReducer'
import savingsPriceReducer from './savingsPriceReducer'
import totalPriceReducer from './totalPriceReducer'

export const allReducers = combineReducers({cartReducer,updateCartReducer,savingsPriceReducer,totalPriceReducer});