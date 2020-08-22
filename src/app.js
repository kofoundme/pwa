// Module imports
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Component imports
import Home from 'components/home';

// Asset imports
import 'assets/css/app.css';

// Start && Export Component
export default class App extends React.Component {
  render = () => (
    <Router basename={`/${window.location.origin.includes('github') ? 'pwa' : ''}`}>
      <Route exact path="/" component={Home} />
    </Router>
  );
}
