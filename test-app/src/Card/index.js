import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title:   props.title ? props.title : '',
      message: props.message ? props.message : ''
    }
  }

  render() {
    return (
      <div className="Card">
        { 
          this.state.title.length > 0 &&
          <div className="Card-Title"><h3>{this.state.title}</h3></div>
        }
        <div className="Card-Message">
          { 
            this.state.message.length > 0 && <span>{this.state.message} <br /></span> 
          }
          {this.props.children}
        </div>
        
      </div>
    )
  }
}

export default Card;
