// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Start Component
class RightScreen extends React.Component {
  static propTypes = {
    children: PropTypes.array,
    hasMoved: PropTypes.bool
  }

  render() {
    return (
      <div
        className={`col-12 col-md offset-md-4 h-100 bg-white ${this.props.hasMoved ? 'moved' : ''}`}
        id="rightScreen"
      >
        <div className="row h-100 align-items-center justify-content-around">
          {this.props.children}
        </div>
      </div>
    );
  }
}

// Export Component
export default RightScreen;
