// Module imports
import React, { Component } from 'react';
import {
  Container, Row, Col, Image
} from 'react-bootstrap';

// Asset imports
import arrow from 'assets/img/arrow.png';

// Start && Export Component
export default class Banner extends Component {
  render = () => (
      <Container className="bg-light py-5 section " fluid id="banner">
        <Row className="justify-content-center align-items-center text-center">
          <Col xs="12" sm className="mb-5 mb-sm-0">
            <h3 className="text-danger">32+</h3>
            <p>Co-founders connected</p>
          </Col>
          <Col xs="12" sm className="mb-5 mb-sm-0">
            <h3 className="mb-3">Our work so far</h3>
            <p><Image src={arrow} alt="arrow" className="img-fluid" /></p>
          </Col>
          <Col xs="12" sm className="mb-5 mb-sm-0">
            <h3 className="text-danger">12</h3>
            <p>Thriving businesses created</p>
          </Col>
        </Row>
      </Container>
  )
}
