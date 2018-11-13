import React from 'react';

// Router
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header';

// Router components

import Login from './router_components/Login';
import Register from './router_components/Register';
import StartPage from './router_components/StartPage';
import MySQLSection from './router_components/MySQLSection';

// Css components
import { Wrapper } from './my_styled_components';




const App = () => (
  <Router>
    <Wrapper>
      <Header />
      <Switch>
        <Route exact path='/' render={() => <StartPage />} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/register' render={() => <Register />} />
        <Route path='/mysql' render={() => <MySQLSection />} />
      </Switch>
    </Wrapper>
  </Router>
)

export default App;
