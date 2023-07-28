import React, {useState} from "react";
import {buyCake} from "../redux/cake/CakeActions";
// 3l4an arbot bayn el component hst5dem connect method
import {connect} from "react-redux";

const NewInputContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>NumberOfCake - {props.numberOfCakes}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {/* hab3t el number bta3 state le function bta3et action creator  */}
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};
// handle action use dispatch method
const mapDispatchToProps = (dispatch) => {
  return {
    // hb3et el number bta3 el state le function 
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewInputContainer);
