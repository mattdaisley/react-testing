import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CounterForm from './Counter/CounterForm';

import NumberList from './List/NumberList';

import NameForm from './Form/NameForm';

import Card from './Card';
import WelcomeCard from './Card/WelcomeCard';

import FilteredProductTable from './FilteredProductTable/FilteredProductTable';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      numbers: [2, 4, 6, 8, 10]
    }
  }

  render() {
    const products = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div className="App-content">
          <div className="App-section">
            <Card>
              <CounterForm />
            </Card>
          </div>
          
          <div className="App-section">
            <Card>
              <NumberList numbers={this.state.numbers} />
            </Card>
          </div>
          
          <div className="App-section">
            <Card>
              <NameForm />
            </Card>
          </div>

          <div className="App-section">
            <WelcomeCard />
          </div>

          <div className="App-section">
            <Card title="Filtered List">
              <FilteredProductTable products={products}/>
            </Card>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
