import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav className="Header">
      <div className="menu">
          <Link to="/createuser">Create User</Link>
          <Link to="/users">Users</Link>
          <Link to="/createadvert">Create Advert</Link>
          <Link to="/">Adverts</Link>
      </div>
    </nav>
  );
}
