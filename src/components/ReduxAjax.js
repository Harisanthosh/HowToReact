import React from "react";
import { connect } from "react-redux";
import userDetailsAction from "./actions/userDetailsActions";

//Always follow this procedure while working with Redux
/*
1. Create View First
2. Design the logic for Store and Actions
3. Build the Reducer
4. Create the store
5. Create Action creators
6. Dispatch Action
7. Connect or subscribe view to State MapStateToProps

*/

class ReductAjax extends React.Component {
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
    //tbd

    this.props.dispatch(userDetailsAction(this.urlBox.value));
  }
  render() {
    console.log("Props obatined:", this.props);
    let errorJSX = null;
    let successJSX = null;
    let waitJSX = null;
    if (this.props.fetching) {
      waitJSX = <h3 style={{ color: "blue" }}> Please wait....</h3>;
    }
    if (this.props.userDetails.name) {
      successJSX = (
        <ul style={{ color: "green" }}>
          <li>{this.props.userDetails.name}</li>
          <li>{this.props.userDetails.id}</li>
          <li>{this.props.userDetails.login}</li>
          <li>{this.props.userDetails.location}</li>
          <li>{this.props.userDetails.blog}</li>
        </ul>
      );
    }
    if (this.props.error) {
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

function mapStateToProps(state) {
  return {
    fetching: state.fetching,
    userDetails: state.userDetails,
    error: state.error
  };
}

const AppContainer = connect(mapStateToProps)(ReductAjax);

export default AppContainer;
