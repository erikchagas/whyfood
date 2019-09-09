import React from 'react';
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

const FinishOrder = ({ formatter, detail, handleClickModalClose }) => (
  <>
    <Modal key={detail.id} id={detail.id}>
      <ModalCard>
        <Header
          formatter={formatter}
          detail={detail}
          handleClickModalClose={handleClickModalClose}
        />
        <Content formatter={formatter} detail={detail} />
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

const Content = ({ formatter, detail }) => (
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
                      <ModalOptionRadio type="radio" />
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

export default FinishOrder;
