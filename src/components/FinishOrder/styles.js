import styled from 'styled-components';

export const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
`;
export const ModalCard = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 48em;
  height: 30em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
`;

export const ModalHeader = styled.header`
  height: 115px;
  width: 100%;
  display: block;
`;

export const ModalCloseContainer = styled.div`
  display: block;
  height: 25px;

  svg {
    float: right;
  }
`;
export const ModalName = styled.p`
  line-height: 45px;
  font-size: 18px;
  color: #3f3e3e;
  font-weight: bold;
  height: 45px;
  width: calc(100% - 70px);
  float: left;
`;
export const ModalPrice = styled.p`
  line-height: 15px;
  color: #ea1d2c;
  height: 15px;
  width: calc(100% - 70px);
  float: left;
`;
export const ModalImg = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 5px;
  box-shadow: 2px 3px 9px rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.section`
  height: 300px;
  width: 100%;
  overflow: auto;
`;

export const ModalOption = styled.div`
  height: auto;
  width: 100%;
  display: block;
`;

export const ModalOptionHeader = styled.header`
  height: 45px;
  width: 100%;
  display: block;
  background: #c0c0c0;
  margin: 6px 0;
  padding: 4px;
  border-radius: 4px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35);
`;
export const ModalOptionTitle = styled.p`
  line-height: 38px;
  color: #3f3e3e;
  height: 20px;
  width: 80%;
  float: left;
`;
export const ModalOptionStatus = styled.p`
  line-height: 38px;
  color: #ea1d2c;
  height: 10px;
  width: 20%;
  float: right;
  text-align: right;
`;

export const ModalMinMax = styled.span`
  height: 15px;
  width: 30px;
  background: grey;
  color: #fff;
  font-size: 14px;
  padding: 5px;
  border-radius: 4px;
`;
export const ModalRequired = styled.span`
  height: 15px;
  width: 45px;
  background: grey;
  color: #fff;
  font-size: 12px;
  padding: 5px;
  border-radius: 4px;
`;

export const ModalOptionList = styled.section`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  margin: 6px 0;
  padding: 4px;
`;
export const ModalOptionName = styled.p`
  line-height: 20px;
  color: grey;
  height: 25px;
  flex: 1;
`;
export const ModalOptionPrice = styled.p`
  line-height: 20px;
  color: #ea1d2c;
  height: 25px;
  flex: 1;
`;

export const ModalCounter = styled.div`
  height: 44px;
  width: 126px;
  float: left;
  margin-top: -10px;
  display: inline-flex;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 6px;
  margin-left: -92px;

  svg {
    display: inline-flex;
    height: 30px;
    width: 30px;
  }
`;

export const ModalCounterValue = styled.div`
  display: inline-block;
  height: 30px;
  width: 60px;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: #3f3e3e;
`;

export const ModalOptionSelect = styled.div`
  height: 50px;
  width: 50px;
  padding: 10px;
  align-self: flex-end;
  margin-left: auto;
  margin-top: -42px;

  svg {
    width: 42px;
    height: 42px;
    color: #ea1d2c;
    margin: -6px 0;
  }

  svg:active {
    opacity: 0.3;
  }
`;

export const ModalOptionRadio = styled.input`
  cursor: pointer;
  display: block;
  height: 35px;
  width: 35px;
  opacity: 0.6;
  text-size-adjust: 100%;
  perspective-origin: 12px 12px;
  transform-origin: 12px 12px;
  user-select: none;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box
    border-box;
  border: 0px none rgb(0, 0, 0);
  font: normal normal 400 normal 16px / 18.4px SulSans, Helvetica, sans-serif;
  padding: 0px;

  :after {
    cursor: pointer;
    text-size-adjust: 100%;
    user-select: none;
    font: normal normal 400 normal 16px / 18.4px SulSans, Helvetica, sans-serif;
  }

  :before {
    cursor: pointer;
    text-size-adjust: 100%;
    user-select: none;
    font: normal normal 400 normal 16px / 18.4px SulSans, Helvetica, sans-serif;
  }

  ::checked {
    background-color: #ea1d2c;
    opacity: 1;
  }
`;
export const ModalFooter = styled.footer`
  height: 55px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-top: 2px solid #f5f0eb;
  padding: 20px 0px;
`;
export const ModalConfirm = styled.button`
  display: flex;
  height: 41px;
  width: 200px;
  align-items: center;
  justify-content: space-between;
  border: 0px none rgb(255, 255, 255);
  border-radius: 4px;
  margin-top: -8px;
  background-color: ${props => (props.validated ? '#ea1d2c' : 'unsets')};
  pointer-events: ${props => (props.validated ? 'auto' : 'none')};
`;

export const ModalConfirmTitle = styled.span`
  color: rgb(255, 255, 255);
  display: block;
  height: 18px;
  text-align: center;
  width: 70px;
  border: 0px none rgb(255, 255, 255);
  font-size: 15px;
  outline: rgb(255, 255, 255) none 0px;
`;

export const ModalConfirmValue = styled.span`
  color: rgb(255, 255, 255);
  display: block;
  height: 18px;
  text-align: center;
  width: 65px;
  border: 0px none rgb(255, 255, 255);
  font-size: 15px;
  outline: rgb(255, 255, 255) none 0px;
`;
