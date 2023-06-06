import { ADD_LIST1, FIL_LIST1 } from "../actionCreator/addListAC";

let initialeState = {
    list1: [
        {
            id: 1,
            title: "It's relly testy"
        },
        {
            id: 2,
            title: "Making a new entry"
        },
        {
            id: 3,
            title: ""
        }
    ]
}

 
export const prosReducers = (state = initialeState, action) => {
    switch (action.type) {
        case ADD_LIST1:
            return {
                ...state,
                list1: [...state.list1, action.payload]
            }
        case FIL_LIST1:
            return {
                ...state,
                list1 : action.payload
            }
        default:
            return state;
    }
}