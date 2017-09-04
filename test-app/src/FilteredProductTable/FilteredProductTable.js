import React, { Component } from 'react';

import './FilteredProductTable.css';

import SearchBar from './Search/SearchBar';

import ProductTable from './FilteredProducts/ProductTable';

class FilteredProductTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockInput = this.handleInStockInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {

    return (
      <div className="Filtered-product-table">
        <div className="Search-wrapper">
          <SearchBar 
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextInput={this.handleFilterTextInput}
            onInStockInput={this.handleInStockInput}
          />
        </div>
        <div className="product-table">
          <ProductTable 
            products={this.props.products} 
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      </div>
    )
  }
}

export default FilteredProductTable;
