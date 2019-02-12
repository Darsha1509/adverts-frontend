import React from "react";
import { connect } from "react-redux";
import "../App.css";
import  UserCreateForm  from "../components/UserCreateForm";
import { setUser } from "../actions/userAction";

class CreateUser extends React.Component {
  render() {
    const { loading, error, user, setUser } = this.props;
    let content = null;
    if (loading) {
      content = <div>Loading...</div>;
    } else if (error) {
      content = <div style={{ color: "red" }}>{error.message}</div>;
    }

    return (
      <div className={"content_container"}>
        <UserCreateForm user={user} setUser={setUser} />
        {content}
      </div>
    );
  }
}

const mapStateToProps = ({ Users }) => {
  return {
    loading: Users.user.loading,
    error: Users.user.error,
    user: Users.user.data
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
