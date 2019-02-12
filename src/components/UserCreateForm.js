import React from "react";
import faker from 'faker';

let content = null;

class UserCreateForm extends React.Component {
  state = {
    username: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email().toLowerCase(),
    phone: faker.phone.phoneNumber('+375 29 ### ## ##')
  };

  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.setUser(this.state);
    if (this.props.user) {
      content = <div>User successfully created:)</div>
    }
  };

  render() {
    const { username, firstName, lastName, email, phone } = this.state;
    return (
      <div>
        <form className="filter">
          <h5>Create User</h5>
          <input
            id="username"
            type="text"
            className="search_field"
            onChange={this.handleChange}
            placeholder="username"
            value={username}
          />
          <input
            id="firstName"
            type="text"
            className="search_field"
            onChange={this.handleChange}
            placeholder="First Name"
            value={firstName}
          />
          <input
            id="lastName"
            type="text"
            className="search_field"
            onChange={this.handleChange}
            placeholder="Last Name"
            value={lastName}
          />
          <input
            id="email"
            type="text"
            className="search_field"
            onChange={this.handleChange}
            placeholder="email"
            value={email}
          />
          <input
            id="phone"
            type="text"
            className="search_field"
            onChange={this.handleChange}
            placeholder="phone"
            value={phone}/>
          <button className="add__btn" onClick={this.onSubmit}>SUBMIT</button>
        </form>
        {content}
      </div>
    );
  }
}

export default UserCreateForm;
