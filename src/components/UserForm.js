import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  stepAction = value => {
    const { step } = this.state;
    let stepValue = value === "next" ? step + 1 : step - 1;
    this.setState({
      step: stepValue
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    } = this.state;
    const { stepName } = this.props;

    const values = { firstName, lastName, email, occupation, city, bio };
    switch (step) {
      case 1:
      default:
        return (
          <Fragment>
            <FormUserDetails
              stepAction={type => this.stepAction(type)}
              handleChange={this.handleChange}
              values={values}
            />
            {stepName === "data"}
          </Fragment>
        );
      case 2:
        return (
          <FormPersonalDetails
            stepAction={type => this.stepAction(type)}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm stepAction={type => this.stepAction(type)} values={values} />
        );
      case 4:
        return <Success />;
    }
  }
}
UserForm.propTypes = {
  stepName: PropTypes.string
};

export default UserForm;
