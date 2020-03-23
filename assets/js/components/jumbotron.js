import React from "react";
import { Button } from '@material-ui/core';
import ButtonAppBar from './button-app-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Jumbotron = () => {
  return (
    <div>
    <ButtonAppBar/>
    <div className="jumbotron">

      <h2>Welcome to Phoenix with Webpack and React</h2>
      <p className="lead">
        A productive web framework that<br />
        does not compromise speed and maintainability.
      </p>
      <p>
        Developed by Pineda<br />
        <Button variant="contained" color="secondary"><Link to="/map">SideMenu</Link></Button>

      </p>
    </div>
    </div>
  )
};

export default Jumbotron;
