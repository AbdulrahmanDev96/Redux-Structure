// el reducer bt2bel el initialState we el action bt3te

// el store bt3 el redux bykon 3bara 3an single object
import { BUY_CAKE } from "./ActionTypes"

// yfdel an tkon el initial state gowa el file bta3 el reducer function
const initialState = {
  numberOfCakes : 10,
}

const reducer = (state = initialState ,action) => {
  // el action gowah property type bt7ded no3 el action
  switch(action.type){
    case BUY_CAKE :
      return {
        // howsel le el action me 5lal el function aw action creator we adef payload
        numberOfCakes : state.numberOfCakes - action.payload
      }
    default : 
      return state
  }
}



export default reducer;