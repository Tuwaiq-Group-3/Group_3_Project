import { createStore, combineReducers } from "redux";
import userReducer from "../reducers/Users/reducer";
import productsReducer from '../reducers/products/reducer'
import wishListReducer from "./wishList/reducer";
import loginStateReducer from "./loginState/reducer";
import CartListReducer from "../reducers/cart/reducer";
import OrdersListReducer from "./order/reducer";
import productReducer from "./product/reducer";


const reducers = combineReducers({ userReducer ,  productsReducer , wishListReducer, loginStateReducer ,CartListReducer, OrdersListReducer,productReducer});
const store = createStore(reducers);

export default store;
