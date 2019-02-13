import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import Header from "./components/Header/";
import Adverts from "./containers/Adverts/Adverts";
import CreateUser from "./containers/CreateUser/CreateUser";
import CreateAdvert from "./containers/CreateAdvert";
import Users from "./containers/Users/Users";
import EditUser from "./containers/EditUser/EditUser";
import EditAdvert from "./containers/EditAdvert";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/index";


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="main-container">
            <Header />
            <div className="container">
              <Route exact path="/" component={Adverts} />
              <Route path="/createuser" component={CreateUser} />
              <Route exact path="/users" component={Users} />
              <Route path="/createadvert" component={CreateAdvert} />
              <Route path="/users/:id" component={EditUser} />
              <Route path="/adverts/:id" component={EditAdvert} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
