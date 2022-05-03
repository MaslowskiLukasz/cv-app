import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <h2>Form</h2>
        <GeneralInfo />
        <Education />
        <Experience />
      </div>
    )
  }
}

class GeneralInfo extends Component {
  render() {
    return(
      <div>
        <h3>GeneralInfo</h3>
      </div>
    )
  }
}

class Education extends Component {
  render() {
    return (
      <div>
        <h3>Education</h3>
      </div>
    )
  }
}

class Experience extends Component {
  render() {
    return (
      <div>
        <h3>Experience</h3>
      </div>
    )
  }
}

export default Form;