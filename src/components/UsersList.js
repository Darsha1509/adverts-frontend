import React from "react";
import { User } from "./User";

class UsersList extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div className={"adverts_container"}>
        {users ? users.map(user => <User key={user._id} user={user} />) : null}
      </div>
    );
  }
}

export { UsersList };
