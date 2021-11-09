import { createStore, combineReducers } from "redux";
import userReducer from "../reducers/Users/reducer";
import productsReducer from '../reducers/products/reducer'
import wishListReducer from "./wishList/reducer";
import loginStateReducer from "./loginState/reducer";
import CartListReducer from "../reducers/cart/reducer";
import OrdersListReducer from "./order/reducer";

const reducers = combineReducers({ userReducer ,  productsReducer , wishListReducer, loginStateReducer ,CartListReducer, OrdersListReducer});
const store = createStore(reducers);

export default store;
