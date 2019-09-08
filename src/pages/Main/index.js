import React, { Component } from 'react';

import {
 Header, Container, Card, CardTitle, CardPrice 
} from './styles';

import api from '../../services/api';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      details: {},
    };
  }

  async componentDidMount() {
    const { products } = this.state;

    const response = await api.get('/products');

    this.setState({
      products: [...products, ...response.data],
    });
  }

  async handleClick(e) {
    const response = await api.get(`/products/${e.target.id}`);

    this.setState({
      details: response.data,
    });
  }

  render() {
    const { products, details } = this.state;

    console.log(details);

    return (
      <>
        <Header />
        <Container>
          {products.map(product => (
            <Card key={product.id} id={product.id} onClick={this.handleClick}>
              <CardTitle>{product.name}</CardTitle>
              <CardPrice>{product.price}</CardPrice>
            </Card>
          ))}
        </Container>
      </>
    );
  }
}
