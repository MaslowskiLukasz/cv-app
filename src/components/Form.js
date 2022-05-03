import React, { Component } from 'react';

class Form extends Component {
  render() {
    const { section, inputs, handleChange, handleSubmit } = this.props;

    return (
      <div>
        <h2>{section.name}</h2>
        <form>
          <InputList
            fields={section.fields}
            inputs={inputs}
            handleChange={handleChange}
          />
          <button onClick={handleSubmit} type='button'>Submit</button>
          <button type='reset'>Edit</button>
        </form>
      </div>
    )
  }
}

class InputList extends Component {
  render() {
    const { fields, inputs, handleChange } = this.props;

    return(
      <div>
        {fields.map((field, index) => {
          return (
            <InputItem              
              name={field.name}
              type={field.type}
              value={inputs[index]}
              handleChange={handleChange}           
            />
          )
        })}
      </div>
    )
  }
}

class InputItem extends Component {
  render() {
    const { name, type, value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}>            
        </input>
      </div>
    )
  }
}

export default Form;