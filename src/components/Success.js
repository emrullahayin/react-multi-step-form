import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";

export class Success extends Component {
  render() {
    return (
      <Fragment>
        <Typography  style={{ marginTop: 15, width: '100%' }} component="h4" variant="h3" gutterBottom>
          Thank You For Your Submission
        </Typography>
        <Typography component="p" variant="h6">
          You will get an email with further instructions
        </Typography>
      </Fragment>
    );
  }
}

export default Success;
