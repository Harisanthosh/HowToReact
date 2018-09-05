import React from "react";
import ReactDate from "./Date";
import ReactCounter from "./ReactCounter";
import ReactForm from "./Form";
import { Link, Switch, Route } from "react-router-dom";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Home from "./Home";
//Rules of JS XML

const styleObj = {
  backgroundColor: "brown",
  fontWeight: "bolder",
  fontSize: "2rem",
  padding: "20",
  height: 50 * 2
};

const i = "Ninjas";

const colorsArr = ["Red", "Green", "Blue"];
let idx = 0;
const jsxArray = colorsArr.map(element => {
  idx++;
  return <li key={idx}>{element}</li>;
});
class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello {i}
          !!
        </h1>
        <h4>Enjoy {Math.random() * Math.floor(10)}</h4>
        <h4>{console.log(jsxArray)}</h4>
        {/* <div className="external">
          <ul>{jsxArray}</ul>
          <h4>{this.props.val}</h4>
        </div>
        <div style={styleObj}>
          <h4>{this.props.val(10, 20)}</h4>
        </div> */}
        <br />
        <button type="button" className="btn btn-success">
          Bootstrap
        </button>
        <br />
        <ReactDate />
        <br />
        <ReactCounter />
        <br />
        <ReactForm />
      </div>
    );
  }
}

export default MainPage;
