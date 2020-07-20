import React, { Component } from 'react';
import AsinForm from './AsinForm'
import ProductsWrapper from './ProductsWrapper'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], maybe: "works" }
  }

  componentDidMount() {
    axios.get('/api/products')
      .then(response => {
        if (response.status === 200) {
          this.setState({ products: response.data });
        }
      })
  }

  render() {
    return <React.Fragment >
      <AsinForm />
      <ProductsWrapper products={this.state.products} />
    </React.Fragment >
  }
}

export default Home;
