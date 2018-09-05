// Refactoring code from presentational components

import { connect } from "react-redux";

import ReduxDisplay from "../ReduxForm/ReduxDisplay";

function mapStateToProps(state) {
  return {
    val: state.count
  };
}

const DisplayContainer = connect(mapStateToProps)(ReduxDisplay);

export default DisplayContainer;
