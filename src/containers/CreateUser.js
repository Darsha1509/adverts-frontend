import React from "react";
import { connect } from "react-redux";
import "../App.css";
import  UserCreateForm  from "../components/UserCreateForm";
import { setUser } from "../actions/userAction";

class CreateUser extends React.Component {
  /* componentDidMount() {
    this.props.setUser();
  } */

  /* componentDidUpdate(prevProps, prevState) {
    console.log("props didUpdate ==>", this.props);
  } */

  render() {
    const { loading, error, users, setUser } = this.props;

    let content = null;

    if (loading) {
      content = <div>Loading...</div>;
    } else if (error) {
      content = <div style={{ color: "red" }}>{error.message}</div>;
    }

    return (
      <div className={"content_container"}>
        <UserCreateForm users={users} setUser={setUser} />
        {content}
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
    setUser: (user) => dispatch(setUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);
