import { createStore, combineReducers } from "redux";

import userReducer from "../Components/Users/reducer";
// {userReducer} === {userReducer: userReducer}
const reducers = combineReducers({ userReducer });
const store = createStore(reducers);

export default store;
