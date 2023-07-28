import React from "react";
// 3l4an arbot bayn el component hst5dem connect method
import {connect} from "react-redux"
import { buyIceCream } from "../redux/icecream/iceCreamActions";

const IceCreamContainer = (props) => {
  return <div>
    <h1>NumberOfIceCream - {props.NumberOfIceCream}</h1>
    <button onClick={props.buyCake}>BuyIceCream</button>
  </div>;
};

const mapStateToProps = (state) => {
  return {
    NumberOfIceCream: state.iceCream.NumberOfIceCream,
  }
}
// handle action use dispatch method
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyIceCream())
  }
}
export default connect(mapStateToProps ,mapDispatchToProps)(IceCreamContainer);
