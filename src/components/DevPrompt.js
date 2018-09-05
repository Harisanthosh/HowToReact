import React from "react";

import { Prompt, Redirect } from "react-router-dom";
class DevPrompt extends React.Component {
  render() {
    return (
      <div>
        <h2>Prompt!</h2>
        <Prompt message="Are you sure you want to leave?" />
      </div>
    );
  }
}

export default DevPrompt;
