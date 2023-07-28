import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from "../redux/icecream/iceCreamActions";

const HookCreamContainer = () => {
  const numberOfIceCream = useSelector((state) => state.iceCream.NumberOfIceCream)
  const dispatch = useDispatch()
  return <div>
    <h2>NumberOfIceCream - {numberOfIceCream} </h2>
    <button onClick={() => dispatch(buyIceCream())}>BuyIceCream</button>
  </div>;
};

export default HookCreamContainer;
