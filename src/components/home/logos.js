// Module imports
import React, { Component } from 'react';

// Component imports
import {
  Image, Container, Col, Row
} from 'react-bootstrap';

// Asset imports
import bilogos from 'assets/img/logos/bilogos.png';
import hosthull from 'assets/img/logos/hosthull.png';
import evenzza from 'assets/img/logos/evenzza.png';
import nimbou from 'assets/img/logos/nimbou.png';
import otuuna from 'assets/img/logos/otuuna.png';
import ritten from 'assets/img/logos/ritten.png';
import virtualting from 'assets/img/logos/virtualting.png';

export default class Logos extends Component {
  render = () => (
    <Container id="logos">
      <Row className="align-items-center justify-content-around">
        {[bilogos, ritten, otuuna, virtualting, hosthull, evenzza, nimbou].map((src, i) => (
          <Col xs="4" sm="3" md="2" lg="1" className="mb-3 mb-lg-none" key={`logos-${i}`}>
            <Image src={src} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
