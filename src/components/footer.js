// Module imports
import React, { Component } from 'react';

// Component imports
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Asset imports
import socialLinks from 'assets/data/socialLinks';

// Start & Export Component
export default class Footer extends Component {
  renderList = () => socialLinks.map((icon, i) => (
      <li
        key={`footer-list-item${i}`}
        className="text-white rounded-circle border border-white p-1 text-center ml-2"
      >
        <FontAwesomeIcon icon={icon} />
      </li>
  ));

  render = () => (
    <footer className="bg-primary section mb-0" id="footer">
      <article className="container">
        <Row>
          <Col>
            <p className="text-white">
              Copyright © 2020 KoFoundMe. All Rights Reserved.
              <br />
              Privacy Policy | Terms of Service
            </p>
          </Col>
          <Col className="text-right mt-4 mt-lg-0">
            <div className="text-white">
              Follow us
              <br />
              <ul>
                {this.renderList()}
              </ul>
            </div>
          </Col>
        </Row>
      </article>
    </footer>
  );
}
