import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CounterForm from './Counter/CounterForm';

import NumberList from './List/NumberList';

import NameForm from './Form/NameForm';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      numbers: [2, 4, 6, 8, 10]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div className="App-section">
          <CounterForm />
        </div>
        
        <div className="App-section">
        <NumberList numbers={this.state.numbers} />
        </div>

        <div className="App-section">
        <NameForm />
        </div>

      </div>
    )
  }
}

export default App;
