//step 1: create a centerlized store for the state of the application
import { createStore } from "redux";
import { counterReducer } from "./counterReducer";

const store = createStore(counterReducer);

export default store;