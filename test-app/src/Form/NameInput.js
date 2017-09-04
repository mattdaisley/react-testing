import React, { Component } from 'react';

class NameInput extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    const nameCase = this.props.case;
    const name     = this.props.name;
    const nameOptions = {
      u: 'Uppercase',
      l: 'Lowercase'
    };

    return (
      <label>
        {nameOptions[nameCase]}:
        <input type="text" value={name} onChange={this.handleChange} />
      </label>
    )
  }
}

export default NameInput;
