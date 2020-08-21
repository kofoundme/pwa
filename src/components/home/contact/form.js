// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Button, Col, Form } from 'react-bootstrap';

// Component imports
import FormField from 'components/form/field';

// Asset imports
import validate from 'assets/forms/validators/contact';

// Start & Export Class
class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonValue: null
    };
  }

  static propTypes = {
    content: PropTypes.object,
    handleSubmit: PropTypes.func
  };

  renderRadio = () => {
    // Define for radio elements
  };

  renderFields = (fields) => fields.map(({
    type, name, options, label, isFullWidth, placeholder, icon
  }, i) => (type === 'radio' ? (
        <>{this.renderRadio()}</>
  ) : (
        <Col xs="12" lg={isFullWidth ? '12' : '6'} key={`contact-form${i}`}>
          <Field
            action="contact"
            name={name}
            type={type}
            component={FormField}
            label={label}
            placeholder={placeholder}
            icon={icon}
            options={options}
          />
        </Col>
  )));

  renderButtons = (buttons) => buttons.map(({ variant, to, value }, i) => (i === 0 ? (
        <Button key={`contact-form-button${i}`} variant={variant} size="lg" type="submit">
          {this.state.buttonValue}
        </Button>
  ) : (
        <Link to={to} type="button" className="btn">
          {value}
        </Link>
  )));

  componentDidMount = () => this.setState({ buttonValue: this.props.content.buttons[0].value });

  render = () => {
    const { buttons, fields, info } = this.props.content;
    return (
      <Form
        onSubmit={this.props.handleSubmit}
        className={'animate__animated animate__zoomIn m-0 px-lg-5'}
        autoComplete="off"
      >
        <Form.Row>{this.renderFields(fields)}</Form.Row>
        <p className="my-3">{info}</p>
        <div className="button-group">{this.renderButtons(buttons)}</div>
      </Form>
    );
  };
}

const warn = () => ({});

export default reduxForm({
  form: 'contactForm',
  validate,
  warn
})(ContactForm);
