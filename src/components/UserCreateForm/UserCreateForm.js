import React from "react";
import Input from "../Input/index";
import "./UserCreateForm.css";
import Button from "../Button/index";

let content = null;

export default class UserCreateForm extends React.Component {
  state = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  };

  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };


  onSubmit = e => {
    e.preventDefault();
    this.props.setUser(this.state);
  };

  render() {
    const { username, firstName, lastName, email, phone } = this.state;
    return (
      <div>
        <form className="UserCreateForm">
          <h5 className="UserCreateForm-title">Create User</h5>
          <Input
            id="username"
            type="text"
            onChange={this.handleChange}
            placeholder="Username"
            value={username}
          />
          <Input
            id="firstName"
            type="text"
            onChange={this.handleChange}
            placeholder="First Name"
            value={firstName}
          />
          <Input
            id="lastName"
            type="text"
            onChange={this.handleChange}
            placeholder="Last Name"
            value={lastName}
          />
          <Input
            id="email"
            type="text"
            onChange={this.handleChange}
            placeholder="email"
            value={email}
          />
          <Input
            id="phone"
            type="text"
            onChange={this.handleChange}
            placeholder="phone"
            value={phone}
          />
          <Button className="UserCreateForm-button" onClick={this.onSubmit}>
            SUBMIT
          </Button>
        </form>
        {content}
      </div>
    );
  }
}
