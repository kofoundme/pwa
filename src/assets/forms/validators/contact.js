export default (contactData) => {
  const errors = {};
  const {
    firstName, familyName, email, message
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

  if (!message) {
    errors.message = 'What do you want to talk to us about?';
  }

  return errors;
};
