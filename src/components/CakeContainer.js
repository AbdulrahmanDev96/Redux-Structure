import React from "react";
import { buyCake } from "../redux/cake/CakeActions";
// 3l4an arbot bayn el component hst5dem connect method
import {connect} from "react-redux"

const CakeContainer = (props) => {
  return <div>
    <h1>NumberOfCake - {props.numberOfCakes}</h1>
    <button onClick={props.buyCake}>BuyCake</button>
  </div>;
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  }
}
// handle action use dispatch method
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}
export default connect(mapStateToProps ,mapDispatchToProps)(CakeContainer);
