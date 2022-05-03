import React, { Component } from 'react';

class Form extends Component {
  render() {
    const sections = this.props.sections;
    return (
      <div>
        <h2>Form</h2>
        {sections.map((section) => {
          return <FormSection sectionName={section.name} fields={section.fields} />
        })}
      </div>
    )
  }
}

class FormSection extends Component {
  render() {
      return (
        <div className='form-section'>
          <h3>{this.props.sectionName}</h3>
          <InputList fields={this.props.fields} />
          <button>Submit</button>
          <button>Edit</button>
        </div>
      )
  }
}

class InputList extends Component {
  render() {
    const fields = this.props.fields;
    return(
      <div>
        {fields.map((field) => {
          return <InputItem name={field.name} type={field.type} />
        })}
      </div>
    )
  }
}

class InputItem extends Component {
  render() {
    const { name, type } = this.props;
    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <input id={name} type={type}></input>
      </div>
    )
  }
}

export default Form;