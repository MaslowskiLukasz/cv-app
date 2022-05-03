import React, { Component } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';
import formFields from './common/formFields';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CV-app</h1>
        <Form sections={formFields} />
        <Preview />
      </div>
    );
  }
}

export default App;
