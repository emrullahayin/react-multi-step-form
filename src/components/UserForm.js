import React, { Component } from "react";

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

  render() {
    return <button onClick={() => this.stepAction("next")}>Next</button>;
  }
}

export default UserForm;
