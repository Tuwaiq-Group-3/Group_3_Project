import { createStore, combineReducers } from "redux";

import userReducer from "./user/reducer";
// {userReducer} === {userReducer: userReducer}
const reducers = combineReducers({ userReducer });
const store = createStore(reducers);

export default store;
