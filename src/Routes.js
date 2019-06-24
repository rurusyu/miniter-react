import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
   } from 'react-router-dom';
// import {index} from './index';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Tweet from './Pages/Tweet/Tweet';
import Index from './Pages/Index';

 class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/tweet" component={Tweet} />
          </Switch>
        </Router>
      )
    }
  }

export default Routes;

