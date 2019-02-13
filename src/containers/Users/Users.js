import React from "react";
import { connect } from "react-redux";
import "../../App.css";
import { UsersList } from "../../components/UsersList";
import { getUsers, deleteUser } from "../../actions/userAction";
import PageTitle from "../../components/PageTitle";
import "./Users.css";

class Users extends React.Component {
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    const { loading, error, users, deleteUser } = this.props;

    let content = null;

    if (loading) {
      content = <div>Loading...</div>;
    } else if (error) {
      content = <div style={{ color: "red" }}>{error.message}</div>;
    }

    return (
      <div className="Users">
        <PageTitle>Users</PageTitle>
        <div className="Users-content">
          {content}
          {users && !loading ? <UsersList users={users} deleteUser={deleteUser} /> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ Users }) => {
  return {
    loading: Users.users.loading,
    error: Users.users.error,
    users: Users.users.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    deleteUser: pathId => dispatch(deleteUser(pathId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
