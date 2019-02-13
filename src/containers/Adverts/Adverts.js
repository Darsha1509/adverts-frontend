import React from "react";
import { connect } from "react-redux";
import "./Adverts.css";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import AdvertsList from "../../components/AdvertsList";
import { getAdverts, deleteAdvert } from "../../actions/advertAction";
import PageTitle from "../../components/PageTitle/index";

class Adverts extends React.Component {
  componentDidMount() {
    this.props.getAdverts();
  }

  render() {
    const { loading, error, adverts, getAdverts, deleteAdvert } = this.props;

    let content = null;

    if (loading) {
      content = <div>Loading...</div>;
    } else if (error) {
      content = <div style={{ color: "red" }}>{error.message}</div>;
    }

    return (
      <div className="Adverts">
        <PageTitle>Adverts</PageTitle>
        <div className="Adverts-container">
          <SearchForm getAdverts={getAdverts} />
          {content}
          {adverts ? (
            <AdvertsList adverts={adverts} deleteAdvert={deleteAdvert} />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ Adverts }) => {
  return {
    loading: Adverts.adverts.loading,
    error: Adverts.adverts.error,
    adverts: Adverts.adverts.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdverts: targetPath => dispatch(getAdverts(targetPath)),
    deleteAdvert: pathId => dispatch(deleteAdvert(pathId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adverts);
