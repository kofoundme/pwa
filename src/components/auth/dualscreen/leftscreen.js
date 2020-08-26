// Module imports
import React from 'react';
import PropTypes from 'prop-types';

// Start Component
class LeftScreen extends React.Component {
  static propTypes = {
    children: PropTypes.array,
    className: PropTypes.string,
    hasMoved: PropTypes.bool,
    isSmaller: PropTypes.bool
  }

  render() {
    return (
        <div
        className={`col-12 position-fixed d-none d-md-block h-100 ${this.props.className} ${this.props.hasMoved ? 'moved' : ''} ${this.props.isSmaller ? 'col-md-4' : 'col-md-6'}`}
        id="leftScreen"
      >
        <div className="row h-100 align-items-center" id="leftScreenRow">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default LeftScreen;
