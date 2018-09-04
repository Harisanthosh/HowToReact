import React from "react"
import ReactDate from './Date'
import ReactCounter from './ReactCounter'
//Rules of JS XML
// Single root tag(element)
// every start tag must have corresponding end tag<p></p></p>
// Empty tags should be closed properly <br />
// Attributes should be given in quotes
// case sensitive
// using for in JSX is not permitted, use jsxArray


//Rules of CSS
// External, internal and inline are 
// we can also import as CSS into a JS file, that is being taken care by WebPack.

const styleObj = {
    backgroundColor: "brown",
    fontWeight: "bolder",
    fontSize: "2rem",
    padding: "20",
    height: 50 * 2
}

const i = "Ninjas";

const colorsArr = ["Red", "Green", "Blue"]
let idx = 0;
const jsxArray = colorsArr.map((element) => {
    idx++;
    return <li key={idx}>{element}</li>
}
)
class App extends React.Component {

    render() {

        return <div>
            <h1>Hello {i}!!</h1>
            <h4>Enjoy {Math.random() * Math.floor(10)}</h4>
            <h4>{console.log(jsxArray)}</h4>
            <div className="external">
                <ul>{jsxArray}</ul>
                <h4>{this.props.val}</h4>
            </div>
            <div style={styleObj}>
                <h4>{this.props.val(10, 20)}</h4>
            </div>
            <br />
            <button type="button" className="btn btn-success">Bootstrap</button><br />
            <ReactDate /><br />
            <ReactCounter />
        </div>;
    }
}

export default App;