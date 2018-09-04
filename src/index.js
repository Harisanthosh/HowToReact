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
ReactDOM.render(<App val={add} />, document.getElementById("root"));

