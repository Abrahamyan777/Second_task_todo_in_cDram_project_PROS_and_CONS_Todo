import { createStore } from "redux";
import { rootReducers } from "./reducers/rootReducers/rootReducers";



export const store = createStore(rootReducers)