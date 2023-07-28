import React from "react";
import {connect} from "react-redux";
import { buyCake } from './../redux/cake/CakeActions';
import { buyIceCream } from './../redux/icecream/iceCreamActions';

const ItemContainer = (props) => {
  return (
    <div>
      <h1>Item - {props.item}</h1>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const ItemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.NumberOfIceCream;
  return {
    item: ItemState,
  };
};
// bt2bel mene dispatch method
const mapDispatchToProps = (dispatch, ownProps) => {
  // h3mel dispatch le el buyCake Action creator
  const DispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem : DispatchFunction
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
