import React from "react";
import EditAdvertForm from "../../components/EditAdvertForm";
import { getAdvert, updateAdvert } from "../../actions/advertAction";
import { getUsers } from "../../actions/userAction";
import { connect } from "react-redux";

class EditUser extends React.Component {
  componentWillMount() {
    this.props.getAdvert(this.props.match.params.id);
    this.props.getUsers();
  }

  render() {
    const { advert, loading, error, updateAdvert, users } = this.props;
    let content = null;
    if (loading) {
      content = <div>Loading...</div>;
    } else if (error) {
      content = <div style={{ color: "red" }}>{error.message}</div>;
    }

    return (
      <div>
        {!loading ?
          <EditAdvertForm
            advert={advert}
            users={users}
            updateAdvert={updateAdvert}
          />
         : null}
        {content}
      </div>
    );
  }
}

const mapStateToProps = ({ Adverts, Users }) => {
  return {
    loading: Adverts.advert.loading,
    error: Adverts.advert.error,
    advert: Adverts.advert.data,
    users: Users.users.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdvert: pathId => dispatch(getAdvert(pathId)),
    updateAdvert: (pathId, newAdvert) =>
      dispatch(updateAdvert(pathId, newAdvert)),
    getUsers: () => dispatch(getUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);
