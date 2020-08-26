// Module imports

export default ({
  fields: [
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
      name: 'password',
      label: 'password',
      placeholder: 'Enter password here',
      type: 'password',
      isFullWidth: true,
      icon: null,
      options: []
    }
  ],
  buttons: [
    {
      value: 'Login',
      variant: 'primary',
      isLink: false,
      to: null
    }, {
      value: 'Register',
      variant: 'link',
      isLink: true,
      to: '/register'
    }
  ]
});
