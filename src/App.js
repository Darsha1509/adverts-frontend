import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import Header from './components/Header/index';
import Adverts from './containers/Adverts';
import CreateUser from './containers/CreateUser';
import CreateAdvert from './containers/CreateAdvert';
import Users from './containers/Users';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Footer} from './components/Footer';

class App extends React.Component {
  render () {
    return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <hr/>
          <Route exact path="/" component={Adverts}/>
          <Route path="/createuser" component={CreateUser}/>
          <Route path="/users" component={Users}/>
          <Route path="/createadvert" component={CreateAdvert}/>
          <hr/>
          <Footer/>
        </div>
      </Router>
    </Provider>
    )
  }
}

export default App;
