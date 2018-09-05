import React from "react";
import axios from "axios";

class ReactAjax extends React.Component {
  constructor(props) {
    super(props);
    this.fetchUserDetails = this.fetchUserDetails.bind(this);
    this.state = {
      fetching: false,
      userDetails: {},
      error: ""
    };
  }
  fetchUserDetails() {
    console.log("Fetching");
    this.setState({ fetching: true, userDetails: {}, error: "" });
    axios
      .get(this.urlBox.value)
      .then(response => {
        this.setState({
          userDetails: response.data,
          fetching: false,
          error: ""
        });
        console.log(response.data);
      })
      .catch(err => {
        this.setState({ fetching: false, userDetails: {}, error: err });
        console.log(err);
      });
  }
  render() {
    let errorJSX = null;
    let successJSX = null;
    let waitJSX = null;
    if (this.state.fetching) {
      waitJSX = <h3 style={{ color: "blue" }}> Please wait....</h3>;
    }
    if (this.state.userDetails.name) {
      successJSX = (
        <ul style={{ color: "green" }}>
          <li>{this.state.userDetails.name}</li>
          <li>{this.state.userDetails.id}</li>
          <li>{this.state.userDetails.login}</li>
          <li>{this.state.userDetails.location}</li>
          <li>{this.state.userDetails.blog}</li>
        </ul>
      );
    }
    if (this.state.error) {
      errorJSX = <h3 style={{ color: "red" }}>404 Not Found</h3>;
    }
    return (
      <div>
        <form>
          <input
            type="text"
            size="50"
            defaultValue="https://api.github.com/users/gaearon"
            ref={node => {
              this.urlBox = node;
            }}
          />
          <br />
          <br />
          <input
            type="button"
            value="Fetch User Details..."
            onClick={this.fetchUserDetails}
          />
        </form>
        <div>
          {waitJSX}
          {successJSX}
          {errorJSX}
        </div>
      </div>
    );
  }
}

export default ReactAjax;
