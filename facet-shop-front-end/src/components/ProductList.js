import React, { Component } from 'react';
import ProductCard from './ProductCard';


export default class ProductList extends Component {
  render() {
    return (
      <div className="container mb-5 d-flex flex-wrap col-10 p-0 wrapper mt-5 rounded justify-content-around">
        {this.props.products.map((product) =>
        <ProductCard
          key={product.id}
          addToCart={this.props.addToCart}
          {...product}
        />
        )}
      </div>

    )
  }
}
