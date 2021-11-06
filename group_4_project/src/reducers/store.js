import { createStore, combineReducers } from "redux";
import userReducer from "../Components/Users/reducer";
import productsReducer from '../reducers/products/reducer'
const reducers = combineReducers({ userReducer ,  productsReducer});
const store = createStore(reducers);

export default store;
