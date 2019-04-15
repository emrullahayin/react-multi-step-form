import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import UserForm from "./components/UserForm";

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <form noValidate autoComplete="off" style={formStyle}>
          <UserForm />
        </form>
      </Fragment>
    );
  }
}

const formStyle = {
  display: "flex",
  flexWrap: "wrap",
  paddingLeft: 24,
  paddingRight: 24
};

export default App;
