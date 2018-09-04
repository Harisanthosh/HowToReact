import React from "react"

//Rules of JS XML
// Single root tag(element)
// every start tag must have corresponding end tag<p></p></p>
// Empty tags should be closed properly <br />
// Attributes should be given in quotes
// case sensitive
// using for in JSX is not permitted, use jsxArray
// 

const i = 100;

const colorsArr = ["Red", "Green", "Blue"]
const jsxArray = colorsArr.map((element) => <li>{element}</li>)
class App extends React.Component {

    render() {

        return <div>
            <h1>Hello {i}!!</h1>
            <h4>Enjoy {Math.random() * Math.floor(10)}</h4>
            <h4>{console.log(jsxArray)}</h4>
            <ul>{jsxArray}</ul>
            <h4>{this.props.val}</h4>
            <h4>{this.props.val(10, 20)}</h4>
        </div>;
    }
}

export default App;