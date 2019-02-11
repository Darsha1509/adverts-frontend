import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { SearchForm } from "../components/SearchForm";
import { AdvertsList } from "../components/AdvertsList";
import { getAdverts } from "../actions/advertAction";

class Adverts extends React.Component {
  componentDidMount() {
    this.props.getAdverts();
  }

  /* componentDidUpdate(prevProps, prevState) {
    console.log("props didUpdate ==>", this.props);
  } */

  render() {
    const { loading, error, adverts, getAdverts } = this.props;

    let content = null;

    if (loading) {
      content = <div>Loading...</div>;
    } else if (error) {
      content = <div style={{ color: "red" }}>{error.message}</div>;
    }

    return (
      <div className={"container"}>
        <SearchForm getAdverts={getAdverts} />
        {content}
        {adverts ? <AdvertsList adverts={adverts} /> : null}
      </div>
    );
  }
}

const mapStateToProps = ({ adverts }) => {
  return {
    loading: adverts.loading,
    error: adverts.error,
    adverts: adverts.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdverts: targetPath => dispatch(getAdverts(targetPath))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adverts);
