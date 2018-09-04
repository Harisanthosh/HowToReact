import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

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
ReactDOM.render(<App val={add} />, document.getElementById("root"));

