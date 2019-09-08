import React, { Component } from 'react';

import {
  Header,
  Container,
  Card,
  CardTitle,
  CardPrice,
  Modal,
  ModalCard,
  ModalHeader,
  ModalClose,
  ModalName,
  ModalImg,
  ModalPrice,
  ModalContent,
  ModalOption,
  ModalOptionHeader,
  ModalOptionTitle,
  ModalOptionStatus,
  ModalOptionList,
  ModalOptionName,
  ModalOptionPrice,
  ModalOptionSelect,
  ModalFooter,
  ModalPicker,
  ModalConfirm,
} from './styles';

import api from '../../services/api';

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
          <Modal key={detail.id} id={detail.id}>
            <ModalCard>
              <ModalHeader>
                <ModalClose onClickCapture={this.handleClickModalClose} />
                <ModalName>{detail.name}</ModalName>
                <ModalPrice>{formatter.format(detail.price)}</ModalPrice>
                <ModalImg src={detail.image_url} />
              </ModalHeader>
              <ModalContent>
                {detail.options.length
                  && detail.options.map((option) => (
                    <ModalOption key={option.id}>
                      <ModalOptionHeader>
                        <ModalOptionTitle>{option.title}</ModalOptionTitle>
                        <ModalOptionStatus>
                          {option.type !== 'single' ? '' : ''}
                        </ModalOptionStatus>
                      </ModalOptionHeader>
                      {
                        option.values.length && option.values.map((value) =>
                          <ModalOptionList key={value.id}>
                            <ModalOptionName>{value.name}</ModalOptionName>
                            <ModalOptionPrice>{formatter.format(value.price)}</ModalOptionPrice>
                            <ModalOptionSelect />
                          </ModalOptionList>
                        )}
                    </ModalOption>
                  ))}
              </ModalContent>
              <ModalFooter>
                <ModalPicker />
                <ModalConfirm>Adicionar</ModalConfirm>
              </ModalFooter>
            </ModalCard>
          </Modal>
        )}
      </>
    );
  }
}
