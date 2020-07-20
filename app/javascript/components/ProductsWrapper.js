import React from 'react';
import Product from './Product'

class ProductsWrapper extends React.Component {

  constructor(props) {
    super(props);
  };

  renderProducts() {
    const products = this.props.products;
    console.log("wrapper recieved products:", products);
    return products.map(product => {
      return (
        <Product
          key={product.id}
          asin={product.asin}
          productName={product.productName}
          category={product.category}
          dimensions={product.dimensions}
          rank={product.rank}
        />)
    })
  }

  render() {
    return (
      <div>
        {this.renderProducts()}
      </div>
    )
  }

}

export default ProductsWrapper;
