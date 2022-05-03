const formFields = [
  {
    name: 'General Information',
    fields: [
      {
        name: 'name',
        type: 'text'
      },
      {
        name: 'email',
        type: 'email'
      },
      {
        name: 'phone',
        type: 'tel'
      }
    ]
  },
  {
    name: 'Education',
    fields: [
      {
        name: 'school-name',
        type: 'text'
      },
      {
        name: 'title',
        type: 'text'
      },
      {
        name: 'start-date',
        type: 'date'
      },
      {
        name: 'end-date',
        type: 'date'
      }
    ]
  },
  {
    name: 'Experience',
    fields: [
      {
        name: 'company-name',
        type: 'text'
      },
      {
        name: 'position',
        type: 'text'
      },
      {
        name: 'tasks',
        type: 'text'
      },
      {
        name: 'start-date',
        type: 'date'
      },
      {
        name: 'end-date',
        type: 'date'
      }
    ]
  }
];

export default formFields;