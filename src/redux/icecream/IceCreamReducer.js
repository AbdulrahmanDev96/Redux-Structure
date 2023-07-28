import { BUY_ICECREAM } from "./actionTypes"


// awel 7aga b3mel an42 le initialState 
//we bdeha el value el ana 3ayz a3mel edit 3leha
const initialState = {
  NumberOfIceCream: 20,
}


// b3mel reducer 3l4an a3del 3la el state aw a3mel update leha
const reducer = (state = initialState, action) => {
  switch(action.type){
    case BUY_ICECREAM :
      return {
        NumberOfIceCream : state.NumberOfIceCream -1
      }
    default : 
      return state
  }
}

export default reducer;