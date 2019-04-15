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

export class FormPersonalDetails extends Component {
  continue = type => e => {
    e.preventDefault();
    this.props.stepAction(type);
  };
  render() {
    const { classes, values, handleChange } = this.props;
    return (
      <Fragment>
        <h1>Form Personal Details</h1>
        <TextField
          fullWidth
          className={classes.textField}
          id="occupation"
          label="Occupation Name"
          value={values.occupation}
          onChange={handleChange("occupation")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          className={classes.textField}
          id="city"
          label="City Name"
          value={values.city}
          onChange={handleChange("city")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          className={classes.textField}
          id="bio"
          label="Bio Name"
          value={values.bio}
          onChange={handleChange("bio")}
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={this.continue("prev")}
          className={classes.button}
        >
          Back
        </Button>
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

FormPersonalDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  stepAction: PropTypes.func
};

export default withStyles(styles)(FormPersonalDetails);
