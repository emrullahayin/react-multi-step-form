import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

export class FormUserDetails extends Component {
  
  continue = type => e => {
    e.preventDefault();
    this.props.stepAction(type)
  };

  render() {
    const { classes, values, handleChange } = this.props;
    return (
      <Fragment>
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
          onClick={this.continue("next")}
          className={classes.button}
        >
          Continue
        </Button>
      </Fragment>
    );
  }
}

FormUserDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  stepAction: PropTypes.func
};

export default withStyles(styles)(FormUserDetails);
