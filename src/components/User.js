import React from 'react';

class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className={"advert_style"}>
        <p className={"adverts_style"}>
          Username: <span className={"normal_font"}>{user.username}</span>
        </p>
        <p className={"adverts_style"}>
          First name: <span className={"normal_font"}>{user.firstName}</span>
        </p>
        <p className={"adverts_style"}>
          Last name: <span className={"normal_font"}>{user.lastName}</span>
        </p>
        <p className={"adverts_style"}>
          Email:
          <span className={"normal_font"}>{user.email}</span>
        </p>
        <p className={"adverts_style"}>
          Phone: <span className={"normal_font"}>{user.phone}</span>
        </p>
      </div>
    );
  }
}

export {User}