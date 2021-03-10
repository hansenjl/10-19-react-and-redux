import React from "react";
import {connect} from "react-redux"

function DisplayTotal(props) {
    
  return (
    <div>
      <h2>You have a total of {props.total} cents</h2>
    </div>
  );
}

const mapStateToProps = (stateFromTheStore) => {
    return {
        total: stateFromTheStore.total
    }
}
// this function needs to return what values we want as props

export default connect(mapStateToProps)(DisplayTotal)