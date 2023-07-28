import React from "react";
// useSelector bgeb el state men el redux aw kemt el state el gowa el initialState
import {useDispatch, useSelector} from "react-redux";
import { buyCake } from "../redux/cake/CakeActions";

// Redux Hooks small function
const HooksCakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  // small function
  // el dispatch pakbel mene el action creator
  const dispatch = useDispatch()
  return (
    <div>
      <h2>NumberOfCakes - {numberOfCakes}</h2>
      {/* Hna ana b3mel pass le action creator fe dispatch variable 
        el 3la hyet function we bb3t fe no3 el action el hytnfez 
        el hya el function
      */}
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
