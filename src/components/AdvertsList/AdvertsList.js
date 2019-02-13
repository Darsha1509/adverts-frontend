import React from "react";
import Advert from "../Advert/index";
import "./AdvertsList.css";

export default class AdvertsList extends React.Component {
  render() {
    const { adverts, deleteAdvert } = this.props;
    return (
      <div className={"AdvertsList"}>
        {adverts
          ? adverts.map(advert => (
              <Advert
                key={advert._id}
                advert={advert}
                deleteAdvert={deleteAdvert}
              />
            ))
          : null}
      </div>
    );
  }
}
