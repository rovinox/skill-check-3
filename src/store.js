import {createStore} from "redux"

const initialState = {
    houses:[]
}

 
export const UPDATE_HOUSE = "UPDATE_HOUSE"

function reducer(state=initialState, action) {
    switch (action.type) {
        case UPDATE_HOUSE:
          return{
              ...state,
              houses: action.payload.slice()
          }
            
            
    
        default:
            return state 
    }
    
}






export default createStore(reducer);