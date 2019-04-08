import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: 24,
    paddingRight: 24
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    console.log("this.props.stepAction()", this.props.stepAction());
  };
  render() {
    const { classes, values, handleChange } = this.props;
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
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            fullWidth
            className={classes.textField}
            id="firstName"
            label="First Name"
            value={values.firstName}
            onChange={handleChange("firstName")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            className={classes.textField}
            id="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleChange("lastName")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            value={values.email}
            onChange={handleChange("email")}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Continue
          </Button>
        </form>
      </Fragment>
    );
  }
}

FormUserDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormUserDetails);
