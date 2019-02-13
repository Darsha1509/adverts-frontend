import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="Header">
      <div className="menu">
        <div className="menu-item-container">
          <Link className="menu-item" to="/createuser">
            Create User
          </Link>
        </div>
        <div className="menu-item-container">
          <Link className="menu-item" to="/users">
            Users
          </Link>
        </div>
        <div className="menu-item-container">
          <Link className="menu-item" to="/createadvert">
            Create Advert
          </Link>
        </div>
        <div className="menu-item-container">
          <Link className="menu-item" to="/">
            Adverts
          </Link>
        </div>
      </div>
    </nav>
  );
}
