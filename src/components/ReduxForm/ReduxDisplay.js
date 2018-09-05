import React from "react";
// do in index.js
//import { connect } from "react-redux";

// const dispcontaitner = connect()(Display);
//<Provider store={constStore}></Provider>

class ReduxDisplay extends React.Component {
  render() {
    console.log("Display props:", this.props);
    return (
      <div>
        <h4> {this.props.val} </h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    val: state.count
  };
}

//const DisplayContainer = connect(mapStateToProps)(ReduxDisplay);

export default ReduxDisplay;
