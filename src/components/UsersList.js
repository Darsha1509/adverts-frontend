import React from "react";
import User from "./User/index";

class UsersList extends React.Component {
  render() {
    const { users, deleteUser } = this.props;
    return (
      <div className={"adverts_container"}>
        {users
          ? users.map(user => (
              <User key={user._id} user={user} deleteUser={deleteUser} />
            ))
          : null}
      </div>
    );
  }
}

export { UsersList };
