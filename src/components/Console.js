import React from "react";

import { Route, Redirect } from "react-router-dom";
class Console extends React.Component {
  render() {
    return (
      <div>
        {/* <h2>Console!</h2> */}
        <Redirect to="/aboutus" />
      </div>
    );
  }
}

export default Console;
