import { ADD_LIST2, FIL_LIST2 } from "../actionCreator/addListAC";

let initialeState = {
    list2: [
        {
            id: 1,
            title: "Make me fat"
        },
        {
            id: 2,
            title: "Too expensive"
        },
        {
            id: 3,
            title: ""
        }
    ]
}

 
export const consReducers = (state = initialeState, action) => {
    switch (action.type) {
        case ADD_LIST2:
            return {
                ...state,
                list2: [...state.list2, action.payload]
            }
        case FIL_LIST2:
            return {
                ...state,
                list2 : action.payload
            }
        default:
            return state;
    }
}