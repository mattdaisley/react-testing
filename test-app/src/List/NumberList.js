import React, { Component } from 'react';

import ListItem from './ListItem';

class NumberList extends Component {

  constructor(props) {
    super(props)

    const numbers = props.numbers;
    const listItems = numbers.map( (number) => 
      <ListItem key={number.toString()} value={number} />
    );
    
    this.state = {
      numbers: numbers,
      items: listItems
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Lists and Keys</h1>
        <p className="App-intro">
          takes an array of numbers as an input and builds a list
        </p>
        <ul>{this.state.items}</ul>
      </div>
    )
  }
}

export default NumberList;
