import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: '1rem',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>


              <Link
                to="/"
                style={{ textDecoration: "none", outline: "none", color: "white"}}
              >
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" style={{ textDecoration: "none", outline: "none"}}>

            <ArrowBackIcon />
              </IconButton>
              </Link>

          <Typography variant="h6" className={classes.title}>
            Create new blog
          </Typography>
        </Toolbar>
      </AppBar>

    </div>
  );
}
