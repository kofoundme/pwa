// Module imports
import React, { Component } from 'react';
import {
  Container, Button, Jumbotron, Row, Col
} from 'react-bootstrap';

// Asset imports
import jumbo from 'assets/svg/jumbo.svg';

// Start & Export Component
export default class Jumbo extends Component {
  render = () => (
    <Jumbotron className="bg-white mb-0" fluid>
      <Container className="justify-content-center text-lg-center">
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="px-3 px-md-0">
            <h1>Co-founding Made Better</h1>
            <p className="lead mb-2">
              easily find shared vision and complementary skill-sets to help you co-found your
              business ideas...
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPIPDIIhP7Cx2Jt-IIYlDyDSJqWinPmP5rXe8wIGM8EYIwHg/viewform">
              <Button variant="danger" size="lg">
                Find a co-founder
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col
            lg="12"
            className="d-none d-lg-flex position-absolute px-0"
            style={{ top: '2%', width: '100%' }}
          >
            <img src={jumbo} alt="" className="" />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
