import React from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';
import { TiMinus, TiPlus } from 'react-icons/ti';

import {
  Modal,
  ModalCard,
  ModalHeader,
  ModalCloseContainer,
  ModalName,
  ModalImg,
  ModalPrice,
  ModalContent,
  ModalOption,
  ModalOptionHeader,
  ModalOptionTitle,
  ModalOptionStatus,
  ModalMinMax,
  ModalRequired,
  ModalOptionList,
  ModalOptionName,
  ModalOptionPrice,
  ModalCounter,
  ModalCounterValue,
  ModalOptionSelect,
  ModalOptionRadio,
  ModalFooter,
  ModalConfirm,
  ModalConfirmTitle,
  ModalConfirmValue,
} from './styles';

const FinishOrder = ({
  formatter,
  detail,
  order,
  handleClickModalClose,
  handleChangeModalOptionRadio,
}) => (
  <>
    <Modal key={detail.id} id={detail.id}>
      <ModalCard>
        <Header
          formatter={formatter}
          detail={detail}
          handleClickModalClose={handleClickModalClose}
        />
        <Content
          formatter={formatter}
          detail={detail}
          order={order}
          handleChangeModalOptionRadio={handleChangeModalOptionRadio}
        />
        <Footer formatter={formatter} />
      </ModalCard>
    </Modal>
  </>
);

const Header = ({ formatter, detail, handleClickModalClose }) => (
  <>
    <ModalHeader>
      <ModalCloseContainer>
        <FaWindowClose size={20} onClickCapture={handleClickModalClose} />
      </ModalCloseContainer>
      <ModalName>{detail.name}</ModalName>
      <ModalPrice>{formatter.format(detail.price)}</ModalPrice>
      <ModalImg src={detail.image_url} />
    </ModalHeader>
  </>
);

const Content = ({
  formatter,
  detail,
  order,
  handleChangeModalOptionRadio,
}) => (
  <>
    <ModalContent>
      {detail.options.length &&
        detail.options.map(option => (
          <ModalOption key={option.id}>
            <ModalOptionHeader>
              <ModalOptionTitle>{option.title}</ModalOptionTitle>
              <ModalOptionStatus>
                {option.max && <ModalMinMax>{`0 / ${option.max}`}</ModalMinMax>}
                {option.required && <ModalRequired>OBRIGATÓRIO</ModalRequired>}
              </ModalOptionStatus>
            </ModalOptionHeader>
            {option.values.length &&
              option.values.map(value => (
                <ModalOptionList key={value.id}>
                  <ModalOptionName>{value.name}</ModalOptionName>
                  <ModalOptionPrice>
                    {formatter.format(value.price)}
                  </ModalOptionPrice>
                  <ModalOptionSelect>
                    {option.type === 'single' ? (
                      <ModalOptionRadio
                        type="radio"
                        name={option.title}
                        data-option={option.id}
                        value={value.id}
                        onChangeCapture={handleChangeModalOptionRadio}
                      />
                    ) : (
                      <ModalCounter>
                        <TiMinus />
                        <ModalCounterValue />
                        <TiPlus />
                      </ModalCounter>
                    )}
                  </ModalOptionSelect>
                </ModalOptionList>
              ))}
          </ModalOption>
        ))}
    </ModalContent>
  </>
);

const Footer = ({ formatter }) => (
  <>
    <ModalFooter>
      <ModalCounter>
        <TiMinus />
        <ModalCounterValue />
        <TiPlus />
      </ModalCounter>
      <ModalConfirm>
        <ModalConfirmTitle>Adicionar</ModalConfirmTitle>
        <ModalConfirmValue>{formatter.format(10)}</ModalConfirmValue>
      </ModalConfirm>
    </ModalFooter>
  </>
);

FinishOrder.propTypes = {
  formatter: PropTypes.PropTypes.shape({
    format: PropTypes.func,
  }).isRequired,
  detail: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image_url: PropTypes.string,
    price: PropTypes.number,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
        title: PropTypes.string,
        required: PropTypes.bool,
        values: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
          })
        ).isRequired,
      }).isRequired
    ),
  }).isRequired,
  order: PropTypes.shape({
    id: PropTypes.number,
    obs: PropTypes.string,
    items: PropTypes.arrayOf({
      id: PropTypes.number,
      value: PropTypes.number,
      type: PropTypes.string,
    }).isRequired,
  }).isRequired,
  handleClickModalClose: PropTypes.func.isRequired,
  handleChangeModalOptionRadio: PropTypes.func,
};
Header.propTypes = {
  formatter: PropTypes.PropTypes.shape({
    format: PropTypes.func,
  }).isRequired,
  detail: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image_url: PropTypes.string,
    price: PropTypes.number,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
        title: PropTypes.string,
        required: PropTypes.bool,
        values: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
          })
        ).isRequired,
      }).isRequired
    ),
  }).isRequired,
  handleClickModalClose: PropTypes.func.isRequired,
};
Content.propTypes = {
  formatter: PropTypes.PropTypes.shape({
    format: PropTypes.func,
  }).isRequired,
  detail: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image_url: PropTypes.string,
    price: PropTypes.number,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
        title: PropTypes.string,
        required: PropTypes.bool,
        values: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
          })
        ).isRequired,
      }).isRequired
    ),
  }).isRequired,
  order: PropTypes.shape({
    id: PropTypes.number,
    obs: PropTypes.string,
    items: PropTypes.arrayOf({
      id: PropTypes.number,
      value: PropTypes.number,
      type: PropTypes.string,
    }).isRequired,
  }).isRequired,
  handleChangeModalOptionRadio: PropTypes.func,
};
Footer.propTypes = {
  formatter: PropTypes.PropTypes.shape({
    format: PropTypes.func,
  }).isRequired,
};

export default FinishOrder;
