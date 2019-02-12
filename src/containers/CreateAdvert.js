import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { AdvertCreateForm } from "../components/AdvertCreateForm";
import { setAdvert } from "../actions/advertAction";
import { getUsers } from "../actions/userAction";

class CreateAdvert extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { loading, error, advert, setAdvert, users } = this.props;

    let content = null;

    if (loading) {
      content = <div>Loading...</div>;
    } else if (error) {
      content = <div style={{ color: "red" }}>{error.message}</div>;
    }

    return (
      <div className="content_container">
        <AdvertCreateForm
          advert={advert}
          users={users}
          setAdvert={setAdvert}
        />
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
    setAdvert: advert => dispatch(setAdvert(advert)),
    getUsers: () => dispatch(getUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAdvert);
