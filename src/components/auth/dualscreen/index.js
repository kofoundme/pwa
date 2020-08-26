// Module imports
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Asset imports
import logo from 'assets/img/logo.png';
import logoWhite from 'assets/img/logoWhite.png';
import icon from 'assets/img/icon.png';

// Start Component
class DualScreen extends React.Component {
  static propTypes = {
    children: PropTypes.array,
    pathname: PropTypes.string
  };

  render() {
    return (
      <div className="container-fluid h-100">
        <div className="row h-100 text-center">
          <Link to="/">
            <picture className="position-fixed" style={{ left: '20px', top: '20px', zIndex: 3 }}>
              <source media="(min-width:768px)" srcSet={`${this.props.pathname.includes('login') ? logo : logoWhite} 1.2x`} />
              <source srcSet={`${icon} 12x`} />
              <img src={logo} alt="KoFoundMe Logo" />
            </picture>
          </Link>
          {this.props.children}
        </div>
      </div>
    );
  }
}

// Export Component
export default DualScreen;
