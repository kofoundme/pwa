// Asset imports
import roles from 'assets/data/roles.json';

export default ({
  fields: [
    {
      name: 'firstName',
      label: 'First Name',
      placeholder: 'e.g: John',
      type: 'text',
      isFullWidth: false,
      icon: null,
      options: []
    },
    {
      name: 'familyName',
      label: 'Family Name',
      placeholder: 'e.g: Doe',
      type: 'text',
      isFullWidth: false,
      icon: null,
      options: []
    },
    {
      name: 'email',
      label: 'Email address',
      placeholder: 'e.g: john.doe@example.com',
      type: 'email',
      isFullWidth: false,
      icon: null,
      options: []
    },
    {
      name: 'phone',
      label: 'Phone Number',
      placeholder: 'e.g: 08092387102',
      type: 'tel',
      isFullWidth: false,
      icon: null,
      options: []
    },
    {
      name: 'country',
      label: 'Country',
      placeholder: 'e.g: Nigeria',
      type: 'datalist',
      isFullWidth: false,
      icon: null,
      options: ['Nigeria', 'Kenya']
    },
    {
      name: 'state',
      label: 'State',
      placeholder: 'Lagos',
      type: 'datalist',
      isFullWidth: false,
      icon: null,
      options: ['Kano', 'Katsina']
    },
    {
      name: 'role',
      label: 'What role(s) do you need a Kofounder for?',
      placeholder: 'e.g: Tech role',
      type: 'multi',
      isFullWidth: true,
      icon: null,
      options: roles
    },
    {
      name: 'renumeration',
      label: 'Any reward, stipend, allowance or renumeration to be received by the cofounder(IN DOLLARS)?',
      placeholder: 'e.g: 100',
      type: 'number',
      isFullWidth: true,
      icon: null,
      options: []
    }
  ],
  buttons: [
    {
      value: 'Register',
      variant: 'primary',
      isLink: false,
      to: null
    }, {
      value: 'Login',
      variant: 'link',
      isLink: true,
      to: '/login'
    }
  ]
});
