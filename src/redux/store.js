//step 1: create a centerlized store for the state of the application
import { applyMiddleware, combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { thunk } from "redux-thunk";
import { userReducer } from "./userReducer";

//we can write our all reducers inside combine reducer
const rootReducer = combineReducers({counter: counterReducer, user: userReducer});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;