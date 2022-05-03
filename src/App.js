import React, { Component } from 'react';
import Form from './components/Form';
import formFields from './common/formFields';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CV-app</h1>
        <Form sections={formFields}/>
      </div>
    );
  }
}

export default App;
