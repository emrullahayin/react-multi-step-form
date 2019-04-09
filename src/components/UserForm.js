import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";

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
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };
    
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={() => this.stepAction("next")}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h1>FormPersonalDetails</h1>;
      case 3:
        return <h1>Confirm</h1>;
      case 4:
        return <h1>Success</h1>;
      default:
        return <h1>Default</h1>;
    }
  }
}

export default UserForm;
