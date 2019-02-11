import React from 'react';
import {Advert} from "./Advert";

class AdvertsList extends React.Component {
  render() {
    const {adverts} = this.props;
    return (
      <div className={'adverts_container'}>
        {adverts ? adverts.map(advert => <Advert key={advert._id} advert={advert}/>) : null}
      </div>
    )
  }
}

export {AdvertsList}