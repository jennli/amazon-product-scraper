import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
// import { scrapeProduct } from "../ProductParser"

// const FormSection = styled.section`
//   padding: 50px 0;
// `

class AsinForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submitted. Value:" + this.state.value);
    axios.post('/products/create').then()
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Product ASIN</Form.Label>
          <Form.Control
            type="text"
            placeholder="eg. B002QYW8LW"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">
            We will lookup amazon product with the provided ASIN.
            </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Lookup
          </Button>
      </Form>
    );
  }
}

export default AsinForm;
