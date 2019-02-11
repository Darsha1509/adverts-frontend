import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import Adverts from './containers/Adverts';
import CreateUser from './containers/CreateUser';
import Users from './containers/Users';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Footer} from './components/Footer';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <ul className={"menu"}>
          <li className={"menu-item"}>
            <Link to="/createuser">Create User</Link>
          </li>
          <li className={"menu-item"}>
            <Link to="/users">Users</Link>
          </li>
          <li className={"menu-item"}>
            <Link to="/createadvert">Create Advert</Link>
          </li>
          <li className={"menu-item"}>
            <Link to="/">Adverts</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Adverts} />
        <Route path="/createuser" component={CreateUser} />
        <Route path="/users" component={Users} />
        <hr/>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();