// import Action constant from action Types
import { BUY_CAKE } from "./ActionTypes";


//Action Types / Action Creator
// payload da kema bt3et el parameter 
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    // el payload el ana bb3to men el component
    payload: number,
  };
};

