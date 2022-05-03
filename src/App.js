import React, { Component } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import formFields from './common/formFields';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChangeGeneralInfo = this.handleChangeGeneralInfo.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleSubmitGeneralInfo = this.handleSubmitGeneralInfo.bind(this);
    this.handleSubmitEducation = this.handleSubmitEducation.bind(this);
    this.handleSubmitExperience = this.handleSubmitExperience.bind(this);

    this.state = {
      inputs: [
        {
          name: '',
          email: '',
          phone: '',
        },
        {
          schoolName: '',
          title: '',
          startDate: '',
          endDate: '',
        },
        {
          companyName: '',
          position: '',
          tasks: '',
          startDate: '',
          endDate: '',
        }
      ],
      preview: [
        {
          name: '',
          email: '',
          phone: '',
        },
        {
          schoolName: '',
          title: '',
          startDate: '',
          endDate: '',
        },
        {
          companyName: '',
          position: '',
          tasks: '',
          startDate: '',
          endDate: '',
        }
      ]
    }
  }

  handleChangeGeneralInfo(event) {
    const target = event.target;
    const name = target.name;
    const nextState = [...this.state.inputs];
    nextState[0][name] = target.value;

    this.setState({
      inputs: nextState
    })
  }

  handleChangeEducation(event) {
    const target = event.target;
    const name = target.name;
    const nextState = [...this.state.inputs];
    nextState[1][name] = target.value;

    this.setState({
      inputs: nextState
    })
  }

  handleChangeExperience(event) {
    const target = event.target;
    const name = target.name;
    const nextState = [...this.state.inputs];
    nextState[2][name] = target.value;

    this.setState({
      inputs: nextState
    })
  }

  handleSubmitGeneralInfo() {
    const nextState = [...this.state.preview];
    nextState[0] = this.state.inputs[0];
    console.log(nextState);

    this.setState({
      preview: nextState
    })
  }

  handleSubmitEducation() {
    const nextState = [...this.state.preview];
    nextState[1] = this.state.inputs[1];
    console.log(nextState);

    this.setState({
      preview: nextState
    })
  }

  handleSubmitExperience() {
    const nextState = [...this.state.preview];
    nextState[2] = this.state.inputs[2];
    console.log(nextState);

    this.setState({
      preview: nextState
    })
  }

  render() {
    return (
      <div className="App">
        <h1>CV-app</h1>
        <Form          
          section={formFields[0]}
          inputs={this.state.inputs[0]}
          handleChange={this.handleChangeGeneralInfo}
          handleSubmit={this.handleSubmitGeneralInfo}
        />
        <Form          
          section={formFields[1]}
          inputs={this.state.inputs[1]}
          handleChange={this.handleChangeEducation}
          handleSubmit={this.handleSubmitEducation}
        />
        <Form          
          section={formFields[2]}
          inputs={this.state.inputs[2]}
          handleChange={this.handleChangeExperience}
          handleSubmit={this.handleSubmitExperience}
        />
        <Preview values={this.state.preview} />
      </div>
    );
  }
}

export default App;
