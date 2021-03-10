import React from "react";
import {connect} from "react-redux"
import {addToTotal, addPenny} from "./actions/coinActions"

const ButtonContainer = (props) => {
    console.log(props)
  return (
    <div id="buttons">
      <button onClick={() => props.addToTotal(25)} id="add-quarter">
        Add a Quarter
      </button>
      <button onClick={() => props.addToTotal(10)} id="add-dime">
        Add a Dime
      </button>
      <button onClick={() => props.addToTotal(5)} id="add-nickel">
        Add a Nickel
      </button>
      <button onClick={props.addPenny} id="add-penny">
        Add a Penny
      </button>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToTotal: (amount) => dispatch(addToTotal(amount)),
//         addPenny: () => dispatch(addPenny())
//     }
// }

export default connect(null, {addToTotal, addPenny})(ButtonContainer);