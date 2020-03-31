import React from "react";
import { Button } from '@material-ui/core';
import DrawerAppBar from './drawer-app-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blogs from "./containers/blogs";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const Jumbotron = () => {
  return (
    <div>
    <DrawerAppBar/>
      <section className="container">

      <Blogs/>
      </section>
      <div
        style = {{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          padding: "10px 15px",
        }}
      >
        <Link
          to="/create"
          style={{ textDecoration: "none", outline: "none"}}
        >
        <Fab color="secondary" aria-label="add" style={{outline: "none", position: "fixed", right: "15px", bottom: "15px"}}>
          <AddIcon />
        </Fab>
        </Link>

      </div>
    </div>
  )
};

export default Jumbotron;
