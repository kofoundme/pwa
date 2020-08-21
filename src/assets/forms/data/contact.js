// Module imports

export default ({
  fields: [
    {
      name: 'firstName',
      label: 'First Name',
      placeholder: 'e.g: John',
      type: 'text',
      isFullWidth: true,
      icon: null,
      options: []
    },
    {
      name: 'familyName',
      label: 'Family Name',
      placeholder: 'e.g: Doe',
      type: 'text',
      isFullWidth: true,
      icon: null,
      options: []
    },
    {
      name: 'email',
      label: 'Email address',
      placeholder: 'e.g: john.doe@example.com',
      type: 'email',
      isFullWidth: true,
      icon: null,
      options: []
    },
    {
      name: 'message',
      label: 'message',
      placeholder: 'Enter your message here',
      type: 'textarea',
      isFullWidth: true,
      icon: null,
      options: []
    }
  ],
  info: 'Please note. You will also be be subscribing to our newsletter by clicking send.',
  buttons: [
    {
      value: 'Send',
      variant: 'danger',
      isLink: false,
      to: null
    }
  ]
});
