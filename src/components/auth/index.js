// Module imports
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Component imports
import LeftScreen from 'components/auth/dualscreen/leftscreen';
import RightScreen from 'components/auth/dualscreen/rightscreen';
import DualScreen from 'components/auth/dualscreen';
import LoginForm from 'components/auth/forms/login';
import RegisterForm from 'components/auth/forms/register';

// Asset imports
import './auth.css';
import loginContent from 'assets/forms/data/login';
import registerContent from 'assets/forms/data/register';

export default class Auth extends React.Component {
  INIT = {
    screenButtonIsActivated: false,
    screenHasMoved: false,
    leftScreenIsSmaller: true,
    dNone: false,
    path: null
  };

  constructor(props) {
    super(props);

    this.state = this.INIT;
  }

  static propTypes = {
    location: PropTypes.object
  };

  getSnapshotBeforeUpdate = () => ({
    shouldAnimate: this.props.location.pathname !== this.state.path
  });

  componentDidUpdate = (prvP, prvS, snapshot) => (snapshot.shouldAnimate ? this.authInteract() : '');

  componentDidMount = () => (this.props.location.pathname.includes('login')
    ? setTimeout(() => this.authInteract(), 250)
    : '');

  authInteract = () => {
    this.setState({
      screenButtonIsActivated: !this.state.screenButtonIsActivated,
      screenHasMoved: !this.state.screenHasMoved,
      leftScreenIsSmaller: !this.state.leftScreenIsSmaller,
      path: this.props.location.pathname
    });

    setTimeout(() => {
      this.setState({
        screenButtonIsActivated: !this.state.screenButtonIsActivated,
        leftScreenIsSmaller: !this.state.leftScreenIsSmaller,
        dNone: !this.state.dNone
      });
    }, 300);
  };

  renderHelp = () => (
    <DualScreen pathname={this.props.location.pathname}>
      <LeftScreen
        className="bg-primary"
        hasMoved={this.state.screenHasMoved}
        isSmaller={this.state.leftScreenIsSmaller}
      >
        <div className={`col p-5 text-white ${this.state.dNone ? 'd-none' : ''}`}>
          <h2>Welcome Back!</h2>
          <p className="my-4">
            To stay connected and continue collaborating log in with your personal info
          </p>
          <Link
            className={`screen-button ${
              this.state.screenButtonIsActivated ? 'activated' : ''
            } btn px-5 py-2 border border-white text-uppercase text-white rounded-pill`}
            to="/login"
          >
            login
          </Link>
        </div>
        <div className={`col p-5 text-white  ${this.state.dNone ? '' : 'd-none'}`}>
          <h2>Hello Friend!</h2>
          <p className="my-4">Enter your info to start collaborating</p>
          <Link
            className={`screen-button ${
              this.state.screenButtonIsActivated ? 'activated' : ''
            } btn px-5 py-2 border border-white text-uppercase text-white rounded-pill`}
            to="/register"
          >
            register
          </Link>
        </div>
      </LeftScreen>

      <RightScreen hasMoved={this.state.screenHasMoved}>
        <div className={`col col-md-10 p-5  ${this.state.dNone ? 'd-none' : ''}`} id="headerDet">
          <h2 className="mt-5">Introduce Yourself</h2>
          <p className="d-md-none">Introduce yourself to start collaborating</p>
          <RegisterForm content={registerContent} onSubmit={(data) => console.log(data)} />
        </div>
        <div className={`col col-md-10 col-lg-8 col-xl-6 p-5 ${this.state.dNone ? '' : 'd-none'}`}>
          <h2 className="mt-5">Login to KoFoundMe</h2>
          <p className="d-md-none">Login to stay connected and continue collaborating</p>

          <LoginForm content={loginContent} onSubmit={(data) => console.log(data)} />
        </div>
      </RightScreen>
    </DualScreen>
  );

  render = () => <>{this.renderHelp()}</>;
}
