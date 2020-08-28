// Module imports
import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';

// Component imports
import Home from 'components/home';
import Auth from 'components/auth';

// Asset imports
import 'assets/css/app.css';

// Start && Export Component
export default class App extends React.Component {
  render = () => (
    <Router basename={`${window.location.origin.includes('github') ? '' : ''}`}>
      <Route exact path="/" component={Home} />
      <Route path={['/register', '/login']} component={Auth} />
    </Router>
  );
}
