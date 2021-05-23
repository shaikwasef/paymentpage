import { combineReducers } from "redux";
import cartReducer from './cartReducer';
import updateCartReducer from './updateCartReducer'

export const allReducers = combineReducers({cartReducer,updateCartReducer});