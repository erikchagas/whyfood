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
      order: {
        id: '',
        obs: '',
        items: []
      },
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
    const id = Number(e.currentTarget.dataset.id);
    const { detail, order } = this.state;

    const response = await api.get(`/products/${id}`);

    if (response.data) {
      this.setState({
        detail: { ...detail, ...response.data },
      });
    }

    const shapeOptions = [];
    response.data.options.forEach(element => {
      shapeOptions.push({
        id: element.id,
        type: element.type
      });
    });

    this.setState({
      order: {
        id: id,
        obs: '',
        items: [...order.items, ...shapeOptions]
      },
    }, () => console.log('after handleClickCard -> ', this.state));

  }

  handleClickModalClose = () =>{
    this.setState({
      detail: {},
      order: {
        id: '',
        obs: '',
        items: []
      }
    }, () => console.log('after handleClickModalClose -> ', this.state));
  }

  handleChangeModalOptionRadio = (e) => {
    const { order } = this.state;
    const option = Number(e.target.dataset.option);
    const value  = Number(e.target.value);

    var index = order.items.findIndex((element) =>{
      return element.id === option;
    });

    let newState = Object.assign({}, this.state);
    newState.order.items[index].value = value;
    this.setState(newState, () => console.log('handleChangeModalOptionRadio --> ', this.state));
  }

  render() {
    const { products, detail, order } = this.state;
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
              data-id={product.id}
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
            order={order}
            handleClickModalClose={this.handleClickModalClose}
            handleChangeModalOptionRadio={this.handleChangeModalOptionRadio}
          />
        )}
      </>
    );
  }
}
