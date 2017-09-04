import React, { Component } from 'react';

class ListItem extends Component {

  constructor(props) {
    super(props)

    this.state = this.validateState(props);
  }

  validateState(props) {
    const key   = ( props.key ) ? props.key : '';
    const value = ( props.value ) ? props.value : '';

    const validState = {
      key: key,
      value: value
    };

    return validState;
  }

  render() {
    return (
      <li key={this.state.key}>{this.state.value}</li>
    )
  }
}

export default ListItem;
