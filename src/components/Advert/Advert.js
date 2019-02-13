import React from "react";
import Button from "../Button/index";
import "./Advert.css";
import {Link} from 'react-router-dom';

export default class Advert extends React.Component {
  deleteAdvert = e => {
    e.preventDefault();
    this.props.deleteAdvert(this.props.advert._id);
  };

  render() {
    const { advert } = this.props;
    return (
      <div className="Advert">
        <p className="adverts_style">
          Title: <span className="normal_font">{advert.title}</span>
        </p>
        <p className="adverts_style">
          Created: <span className="normal_font">{advert.created}</span>
        </p>
        <p className="adverts_style">
          Modified: <span className="normal_font">{advert.modified}</span>
        </p>
        <p className="adverts_style">
          Description:
          <span className="normal_font">{advert.description}</span>
        </p>
        <p className="adverts_style">
          Category: <span className="normal_font">{advert.category}</span>
        </p>
        <p className="adverts_style">
          Price: <span className="normal_font">{advert.price}</span>
        </p>
        <p className="adverts_style">
          Views: <span className="normal_font">{advert.views}</span>
        </p>
        {advert.author ? (
          <p className="adverts_style">
            Author: <p className="normal_font">{advert.author.username}</p>
            <p className="normal_font">{advert.author.phone}</p>
            <p className="normal_font">{advert.author.email}</p>
          </p>
        ) : null}
        <Link to={`/adverts/${advert._id}`}>Edit Advert</Link>
        <Button className="advert-button" onClick={this.deleteAdvert}>
          Delete
        </Button>
      </div>
    );
  }
}
