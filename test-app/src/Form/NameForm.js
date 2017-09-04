import React, { Component } from 'react';

import NameInput from './NameInput';

class NameForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      case: 'u',
      name: 'username'
    };

    this.handleLowercaseChange = this.handleLowercaseChange.bind(this);
    this.handleUppercaseChange = this.handleUppercaseChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleLowercaseChange(name) {
    this.setState({case: 'l', name});
  }

  handleUppercaseChange(name) {
    this.setState({case: 'u', name});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name.slice(0,1).toUpperCase() + this.state.name.slice(1).toLowerCase());
    event.preventDefault();
  }

  convertCase(name, convertFn) {
    if (!name) {
      return '';
    }
    const output = convertFn(name);
    return output;
  }

  toLower(name) {
    const lowerName = name.toLowerCase();
    return lowerName;
  }

  toUpper(name) {
    const upperName = name.toUpperCase();
    return upperName;
  }

  render() {
    const name = this.state.name;
    
    const nameLower = this.convertCase(name, this.toLower);
    const nameUpper = this.convertCase(name, this.toUpper);

    return (
      <div className="nameFormWrapper">
        <h1>Forms, Lifting State Up</h1>
        <p className="App-intro">
          Keeps the two input values binded together.<br/>
          State is handled by the NameForm component and passed between the NameInput components
        </p>
        <form onSubmit={this.handleSubmit}>

          <div className="nameInputWrapper">
            <NameInput case="l" name={nameLower} onNameChange={this.handleLowercaseChange} />
          </div>
          <div className="nameInputWrapper">
            <NameInput case="u" name={nameUpper} onNameChange={this.handleUppercaseChange} />
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default NameForm;
