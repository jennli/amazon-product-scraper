import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Product extends Component {
    constructor(props) {
        super(props);
    }

    // propTypes = {
    //   productName: propTypes.string,
    //   category: propTypes.string,
    //   dimensions: propTypes.string,
    //   rank: propTypes.string,
    // }

    render() {
        return (
            <div>
                <h2>{this.props.productName}</h2>
                <p>ASIN: {this.props.asin}</p>
                <p>category: {this.props.category}</p>
                <p>dimensions: {this.props.dimensions}</p>
                <p>rank: {this.props.rank}</p>
            </div>
        )
    }
}

export default Product;
