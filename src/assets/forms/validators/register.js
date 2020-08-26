// Asset imports
import roles from 'assets/data/roles.json';

export default (contactData) => {
  const errors = {};
  const {
    firstName, familyName, email, phone, country, state, role, renumeration
  } = contactData;

  if (!firstName) {
    errors.firstName = 'What is your first name?';
  }

  if (!familyName) {
    errors.familyName = 'What is your family name?';
  }

  if (!email) {
    errors.email = 'What is your email address?';
  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(email)) {
    errors.email = 'The email provided is not valid';
  }

  if (!phone) {
    errors.phone = 'What is your phone number?';
  }
  // TODO: Add check for phone number pattern

  if (!country) {
    errors.country = 'What country do you primarily work in?';
  }
  // TODO: Add check for if country is among list of countries

  if (!state) {
    errors.state = 'What state do you primarily work in?';
  }
  // TODO: Add check for if state is among list of states

  if (role && role.length < 1) {
    errors.role = 'Do select at least one role';
  } else if (
    !roles
      .map(({ value }) => value)
      .every((val) => (role || []).map((item) => item).includes(val))
  ) {
    errors.role = 'Do select at least one of our suggested roles';
  }

  if (!renumeration) {
    errors.renumeration = 'How much are you willing to give to your fellow Kofounder?';
  } else if (renumeration < 1) {
    errors.renumeration = 'You must be willing to offer at least $1';
  }

  return errors;
};
