import { combineReducers } from "redux"
import { prosReducers } from "../prosReducers"
import { consReducers } from "../consReducers"



export const rootReducers = combineReducers({
        prosReducers: prosReducers,
        consReducers: consReducers
})