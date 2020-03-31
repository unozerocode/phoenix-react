// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
// import "phoenix_html"
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/home';
import SideMenu from './components/side-menu';
import Form from './components/containers/form';
import UpdateForm from './components/containers/update-form';
const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/update" component={UpdateForm}/>
          <Route path="/create" component={Form} />
           <Route path="/" component={Home}/>
        </Switch>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById("react-app"));

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"
