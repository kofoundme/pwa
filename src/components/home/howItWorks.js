// Module imports
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Asset imports
import howItWorks from 'assets/data/howItWorks.json';

// Start & Export Component
export default class Howitworks extends Component {
  renderHelp = () => howItWorks.map(({ title, body }, i) => (
      <Col key={`howItWorks${i}`} xs="12" lg="3" xl="2" className="card mx-lg-4 mx-xl-5 shadow px-4 py-3 mb-4 mb-lg-0">
        <h4 className="mb-3 sub-title">{title}</h4>
        <p className="body">{body}</p>
      </Col>
  ));

  render = () => (
    <Container className="text-center section px-5 px-lg-0" id="howItWorks">
      <h2 className="title">How It Works</h2>
      <Row className="justify-content-center">{this.renderHelp()}</Row>
    </Container>
  );
}
