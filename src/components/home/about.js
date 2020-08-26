// Module imports
import React, { Component } from 'react';
import {
  Container, Row, Col, Image, Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Asset imports
import about from 'assets/svg/about.svg';

// Start & Export Component
export default class About extends Component {
  render = () => (
    <Container className="section" id="about">
      <h2 className="title">About us</h2>
      <Row>
        <Col>
          <p>
            At Kofoundme, we believe co-founding is like marriage, that is why we go steps further
            to help founders find complementary talents that also have interest in the vision they
            are trying to achieve. We enable personality and cognitive skills testing for founders,
            so that they can matchup with the right talent fit. Through Kofoundme, founders can get
            complementary founding team members across the following roles:
          </p>
          <div className="d-flex mt-3">
            <ul className="px-3">
              <li>Technology</li>
              <li>Operations</li>
            </ul>
            <ul className="px-3">
              <li>Growth</li>
              <li>Funding</li>
            </ul>
          </div>
        </Col>
        <Col className="d-none d-lg-flex">
          <Image src={about} className="img-fluid" alt="About" />
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center text-center">
        <Col>
          <Link to="/register">
            <Button size="lg" variant="danger">
              Get started
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
