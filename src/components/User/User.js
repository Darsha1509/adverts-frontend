import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button/index';
import './User.css';

export default class User extends React.Component {
  deleteUser = e => {
    e.preventDefault();
    this.props.deleteUser(this.props.user._id);
  };

  render() {
    const { user } = this.props;
    return (
      <div className="User">
        <p className="adverts_style">
          Username: <span className="normal_font">{user.username}</span>
        </p>
        <p className="adverts_style">
          First name: <span className="normal_font">{user.firstName}</span>
        </p>
        <p className="adverts_style">
          Last name: <span className="normal_font">{user.lastName}</span>
        </p>
        <p className="adverts_style">
          Email:
          <span className="normal_font">{user.email}</span>
        </p>
        <p className="adverts_style">
          Phone: <span className="normal_font">{user.phone}</span>
        </p>
        {user.adverts.length ? <p className="adverts_style">Adverts: </p> : null}
        {user.adverts ?  user.adverts.map((advert, index) => {
          return <p key={index}>{advert.title}</p>
        }) : null}
        <Link to={`/users/${user._id}`}>Edit User</Link>
        <Button className="user-delete-button" onClick={this.deleteUser}>Delete</Button>
      </div>
    );
  }
}