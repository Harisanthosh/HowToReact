import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./components/Reducers/counterReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import customLogger from "./components/middlewares/customLogger";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

import userDetailsReducer from "./components/Reducers/userDetailsReducer";

// function Hello() {
//     return <div>
//         <h1>Hello World!!</h1>
//     </div>;
// }
function add(a, b) {
  return a + b;
}
//while passing props to the child component except when passing strings use {} to pass array/ function/ or jsx to your code
//Some examples are listed below passing array

//ReactDOM.render(<App val={[1, 2, 3]} />, document.getElementById("root"));

//Stateful components
//Any dynamic behavoir with time or with user interaction we need stateful components
//States are internal, so adding and updating and removing should happen only inside the component
// whenever the state changes, the render method will be reexecuted
// Never use the names with conflicting JavaScript Libraries as it results to Error
// Treat the user interface as the slave of the state. Once the state changes, the UI will be re-rendered
// Redux is a state management library, it manages and maintains the state very well
// React Follows uni-directional flow of communication from compenent to descendants

//Lifecycle methods
// Mounting phase | Update Phase | Unmounting Phase
// constructor    |     render     | componentWillUnmount
// componentWillMount | componentWillUpdate |
// componentDidMount | componentDidUpdate, componentWillReceiveProps, shouldComponentUpdate
// componentWillMount and componentWillUpdate will not generally have any logic as render didn't happen
// so dont do Ajax call in Will method
// componentDidMount is the place where ajax call or updation of state can be made
// All cleaning up activities will be performed in componentWillUnmount

// All DOM events are not real, we use Synthetic events
// Diffing is the algorithm to find where the change / delta is to be made and will update only that portion / cell
// the process of updating the area or cell from cell is called reconciliation
// Vdom-2 <- Vdom-1 <- Rdom

const appStore = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(customLogger, logger))
);

const spaStore = createStore(
  userDetailsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
/*axios
  .get("https://api.github.com/users/gaearon")
  .then(response => {
    console.log(response.data);
  })
  .catch(err => {
    console.log(err);
  });*/

//We can pass and use only one store so change it when needed or use your own MultiProvider as per -gaearon :P

ReactDOM.render(
  <Provider store={spaStore}>
    <Router>
      <App val={add} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
