import React from "react";
// do in index.js
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../actions/counterActions";
// const dispcontaitner = connect()(Display);
//<Provider store={constStore}></Provider>

class ReduxForm extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    console.log("Incrementing!!");
    this.props.dispatch(incrementAction());
  }
  decrement() {
    console.log("Decrementing!!");
    this.props.dispatch(decrementAction());
  }
  render() {
    return (
      <div>
        <form action="">
          <input type="button" value="increment" onClick={this.increment} />{" "}
          &nbsp;&nbsp;
          <input
            type="button"
            value="decrement"
            onClick={this.decrement}
          />{" "}
          <br />
          <br />
        </form>
      </div>
    );
  }
}

const FormContainer = connect()(ReduxForm);

export default FormContainer;
