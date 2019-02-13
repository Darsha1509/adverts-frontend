import React from "react";
import Input from '../Input/index';
import './EditUserForm.css';
import Button from '../Button/index';

let content = null;

export default class UserCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      username: this.props.user.username,
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      email: this.props.user.email,
      phone: this.props.user.phone
    };
  }


  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.updateUser(this.props.user._id, this.state);
  };

  render() {
    const { username, firstName, lastName, email, phone } = this.state;
    return (
      <div>
        <form className="EditUserForm">
          <h5 className="EditUserForm-title">Edit User</h5>
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
            value={phone}/>
          <Button onClick={this.onSubmit}>SUBMIT</Button>
        </form>
        {content}
      </div>
    );
  }
}