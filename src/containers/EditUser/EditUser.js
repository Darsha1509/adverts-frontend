import React from "react";
import EditUserForm from "../../components/EditUserForm";
import { getUser, updateUser } from "../../actions/userAction";
import { connect } from "react-redux";

class EditUser extends React.Component {
  componentWillMount() {
    const path = String(this.props.match.params.id);
    this.props.getUser(path);
  }

  render() {
    const { user, loading, error, updateUser } = this.props;
    let content = null;

    if(loading) {
      content=<div>Loading...</div>
    } else if (error) {
      content = <div style={{color: "red"}}>{error.message}</div>;
    }

    return (
      <div>
        {!loading ? <EditUserForm user={user} updateUser={updateUser}/> : null }
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
    getUser: pathId => dispatch(getUser(pathId)),
    updateUser: (pathId, newUser) => dispatch(updateUser(pathId, newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);
