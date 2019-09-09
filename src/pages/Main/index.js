import React, { Component } from 'react';
import {
  Header,
  Container,
  Card,
  CardTitle,
  CardPrice
} from './styles';

import api from '../../services/api';

import FinishOrder from '../../components/FinishOrder';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      detail: {},
    };
  }

  async componentDidMount() {
    const { products } = this.state;

    const response = await api.get('/products');

    this.setState({
      products: [...products, ...response.data],
    });
  }

  async handleClickCard(e) {
    const { detail } = this.state;

    const response = await api.get(`/products/${e.currentTarget.id}`);

    if (response.data) {
      this.setState({
        detail: { ...detail, ...response.data },
      });
    }
  }

  handleClickModalClose = () =>{
    this.setState({
      detail: {},
    });
  }

  render() {
    const { products, detail } = this.state;
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return (
      <>
        <Header />
        <Container>
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              onClickCapture={(e) => this.handleClickCard(e)}
            >
              <CardTitle>{product.name}</CardTitle>
              <CardPrice>{formatter.format(product.price)}</CardPrice>
            </Card>
          ))}
        </Container>
        {Object.getOwnPropertyNames(detail).length && (
          <FinishOrder
            formatter={formatter}
            detail={detail}
            handleClickModalClose={this.handleClickModalClose}
          />
        )}
      </>
    );
  }
}
