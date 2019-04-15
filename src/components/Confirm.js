import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexWrap: "wrap",
    marginTop: 14
  },
  button: {
    margin: theme.spacing.unit
  }
});

export class Confirm extends Component {
  continue = type => e => {
    e.preventDefault();
    this.props.stepAction(type);
  };
  render() {
    const {
      classes,
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <Fragment>
        <List component="nav" className={classes.list}>
          <ListItem button divider>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem button divider>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem button divider>
            <ListItemText primary="Email Name" secondary={email} />
          </ListItem>
          <ListItem button divider>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem button divider>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem button divider>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
        </List>
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
          Confirm & Continue
        </Button>
      </Fragment>
    );
  }
}

Confirm.propTypes = {
  classes: PropTypes.object.isRequired,
  stepAction: PropTypes.func
};

export default withStyles(styles)(Confirm);
