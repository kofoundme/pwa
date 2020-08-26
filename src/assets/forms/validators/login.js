export default (contactData) => {
  const errors = {};
  const {
    email, password
  } = contactData;

  if (!email) {
    errors.email = 'What is your email address?';
  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(email)) {
    errors.email = 'The email provided is not valid';
  }

  if (!password) {
    errors.password = 'What is your password?';
  }

  return errors;
};
