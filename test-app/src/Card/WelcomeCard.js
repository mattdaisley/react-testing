import React, { Component } from 'react';
import Card from './';

class WelcomeCard extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Card
        title="Welcome"
        message="This welcome card uses composition to create a specialized Card component" />
    );
  }
}

export default WelcomeCard;
