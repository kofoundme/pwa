// Module imports
import React, { Component } from 'react';
import {
  Container, Button, Jumbotron, Row, Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Start & Export Component
export default class Jumbo extends Component {
  render = () => (
    <Jumbotron className="mb-0 section" id="jumbo" fluid>
      <Container className="justify-content-center text-lg-center">
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="px-3 px-md-0">
            <h1>Co-founding Made Better</h1>
            <p className="lead mb-2">
              easily find shared vision and complementary skill-sets to help you co-found your
              business ideas...
            </p>
            <Link to="/register">
              <Button variant="danger" size="lg">
                Find a co-founder
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
