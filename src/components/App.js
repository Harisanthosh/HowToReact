import React from "react";
import ReactDate from "./Date";
import ReactCounter from "./ReactCounter";
import ReactForm from "./Form";
import { Link, Switch, Route } from "react-router-dom";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Home from "./Home";
import MainPage from "./MainPage";
import Console from "./Console";
import DevPrompt from "./DevPrompt";
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

//React Router
// Instead of using Link we can also use <NavLink activeClassName="activeMenu" to="/prompt">Prompt </NavLink>
// The props of the router will have history, location and match
// If we use :id it will be in match params
// If we add a queryString it will be in location
// If we change the browser router to hashrouter we will have a *
// If our content is just a static content we can use a static router, so it wont contact the server. For dynamic site use Dynamic router
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
class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/mainpage">App Dashboard</Link>
          </li>
          <li>
            <Link to="/console">Console</Link>
          </li>
          <li>
            <Link to="/prompt">Prompt</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={Aboutus} />
          {/* <Route path="/about" render={()=>{
              <Aboutus val="300"/>
          }} /> Passing parameters in Route Path*/}
          <Route path="/contactus" component={Contactus} />
          <Route path="/mainpage" component={MainPage} />
          <Route path="/console" component={Console} />
          <Route path="/prompt" component={DevPrompt} />
          <Route
            path="*"
            render={() => {
              return <h1>404 - Not Found!</h1>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
