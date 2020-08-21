// Module imports
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Component imports
import ContactForm from 'components/home/contact/form';

// Asset imports
import content from 'assets/forms/data/contact';

// Start & Export Components
export default class Contact extends Component {
  render = () => (
    <Container className="text-center section px-5 px-lg-0" id="contact">
      <h2 className="title">Contact us.</h2>
      <Row className="justify-content-center">
        <Col>
          <ContactForm content={content} onSubmit={(data) => console.log(data)} />
        </Col>
      </Row>
    </Container>
  );
}
