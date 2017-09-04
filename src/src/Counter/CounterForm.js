import React, { Component } from 'react';

import Counter from './Counter';

class CounterForm extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      increment: 1
    }
    
    // This binding is necessary to make `this` work in the callback
    this.upIncrement = this.upIncrement.bind(this);
  }

  upIncrement() {
    this.setState((prevState, props) => {
      return {
        increment: prevState.increment + 1
      };
    });
  }

  render() {
    return (
      <div>
        <h1>State and Lifecycle</h1>
        <p className="App-intro">
          Maintains increment value in the state<br/>
          Uses the lifecycle hook componentDidMount<br/>
          Increment value is passed from parent component to the child component
        </p>
        <p className="App-intro">
          Increment: {this.state.increment}, Count: <Counter increment={this.state.increment} />
        </p>
        <p className="App-intro">
          <button onClick={this.upIncrement}>
            Increase increment
          </button>
        </p>
      </div>
    )
  }
}

export default CounterForm;
