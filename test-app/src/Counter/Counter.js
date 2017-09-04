import React, { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0, 
      increment: parseInt(( props.increment ) ? props.increment : 1, 0)
    }
  }

  componentDidMount() {
    this.counterID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  tick() {
    this.setState((prevState, props) => {
      return {
        count: prevState.count + parseInt(props.increment, 0)
      };
    });
  }

  render() {
    return (
      <span>{this.state.count}</span>
    )
  }
}

export default Counter;
