import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { UsersList } from "../components/UsersList";
import { getUsers } from "../actions/userAction";

class Users extends React.Component {
  componentWillMount() {
    this.props.getUsers();
  }

  /* componentDidUpdate(prevProps, prevState) {
    console.log("props didUpdate ==>", this.props);
  } */

  render() {
    const { loading, error, users} = this.props;

    let content = null;

    if (loading) {
      content = <div>Loading...</div>;
    } else if (error) {
      content = <div style={{ color: "red" }}>{error.message}</div>;
    }

    return (
      <div className={"container"}>
        {content}
        {users ? <UsersList users={users} /> : null}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    loading: users.loading,
    error: users.error,
    users: users.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);