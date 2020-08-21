// Module imports
import React, { Component } from 'react';
import {
  Col, Container, Row, Image
} from 'react-bootstrap';

// Asset imports
import testimonials from 'assets/data/testimonials.js';

// Start & Export Compoennt
export default class Testimonials extends Component {
  renderHelp = () => testimonials.map(({ image, name, testimony }, i) => (
      <Col
        key={`howItWorks${i}`}
        xs="12"
        lg="3"
        className="card mx-lg-4 mx-xl-5 shadow px-4 py-5 mt-5 mb-4 mb-lg-0"
      >
        <div className="img-holder">
          <Image className="img-fluid" src={image} alt="Person" />
        </div>
        <div className="mt-5">
          <h4 className="mb-3 sub-title">{name}</h4>
          <p className="body">{testimony}</p>
        </div>
      </Col>
  ));

  render = () => (
    <Container className="text-center section px-5 px-lg-0" id="testimonials">
      <h2 className="title">Some of our members have this to say.</h2>
      <Row className="justify-content-around">{this.renderHelp()}</Row>
    </Container>
  );
}
