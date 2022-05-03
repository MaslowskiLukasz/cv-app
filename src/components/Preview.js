import React, { Component } from 'react';

class Preview extends Component {
  render() {
    const values = this.props.values;

    return (
      <div className='preview'>
        <h2>Preview</h2>
        {values.map((obj) => {
          return(
            Object.entries(obj).map(([key, value]) => {
              return <p>{key.toUpperCase()}: {value} </p>
            })
          )
        })}
      </div>
    )
  }
}

export default Preview;