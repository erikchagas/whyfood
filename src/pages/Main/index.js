import React, { Component } from 'react';

import { Header, Container, Card, CardTitle, CardPrice } from './styles';

export default class Main extends Component {
  state = {
    products: [],
  };
  render() {
    const { products } = this.state;

    console.log(products);

    return (
      <>
        <Header />
        <Container>
          <Card>
            <CardTitle>ABC</CardTitle>
            <CardPrice>ABC</CardPrice>
          </Card>
        </Container>
      </>
    );
  }
}
