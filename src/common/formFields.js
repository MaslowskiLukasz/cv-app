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
        name: 'schoolName',
        type: 'text'
      },
      {
        name: 'title',
        type: 'text'
      },
      {
        name: 'startDate',
        type: 'date'
      },
      {
        name: 'endDate',
        type: 'date'
      }
    ]
  },
  {
    name: 'Experience',
    fields: [
      {
        name: 'companyName',
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
        name: 'startDate',
        type: 'date'
      },
      {
        name: 'endDate',
        type: 'date'
      }
    ]
  }
];

export default formFields;