import React from 'react';

class Advert extends React.Component {
  render() {
    const { advert } = this.props;
    return (
      <div className={"advert_style"}>
        <p className={"adverts_style"}>
          Title: <span className={"normal_font"}>{advert.title}</span>
        </p>
        <p className={"adverts_style"}>
          Created: <span className={"normal_font"}>{advert.created}</span>
        </p>
        <p className={"adverts_style"}>
          Modified: <span className={"normal_font"}>{advert.modified}</span>
        </p>
        <p className={"adverts_style"}>
          Description:
          <span className={"normal_font"}>{advert.description}</span>
        </p>
        <p className={"adverts_style"}>
          Category: <span className={"normal_font"}>{advert.category}</span>
        </p>
        <p className={"adverts_style"}>
          Price: <span className={"normal_font"}>{advert.price}</span>
        </p>
        <p className={"adverts_style"}>
          Views: <span className={"normal_font"}>{advert.views}</span>
        </p>
        {advert.author ? (
          <p className={"adverts_style"}>
            Author:
            <span className={"normal_font"}>{advert.author.username}</span>
          </p>
        ) : null}
      </div>
    );
  }
}

export {Advert}