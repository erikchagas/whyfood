import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  min-height: 70px;
  background: #c0c0c0;
`;

export const Container = styled.ul`
  max-width: 900px;
  padding: 30px;
  margin: 0 auto;
  overflow: auto;
`;

export const Card = styled.li`
  display: block;
  padding: 10px;
  width: 100%;
  height: 96px;
  border-radius: 4px;
  box-shadow: 2px 3px 9px rgba(0, 0, 0, 0.2);
  margin: 5px 0;

  :active {
    background: grey;
  }
`;

export const CardTitle = styled.p`
  font-size: 20px;
  color: grey;
  margin: 10px 0;
  width: 100%;
`;

export const CardPrice = styled.p`
  width: 100%;
  font-size: 15px;
  color: grey;
`;

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
  border-radius: 5px;
`;

export const ModalHeader = styled.header`
  height: 115px;
  width: 100%;
  display: block;
`;

export const ModalClose = styled.img`
  height: 15px;
  width: 100%;
`;
export const ModalName = styled.p`
  line-height: 45px;
  font-size: 18px;
  color: black;
  font-weight: bold;
  height: 45px;
  width: calc(100% - 70px);
  float: left;
`;
export const ModalPrice = styled.p`
  line-height: 15px;
  color: red;
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
`;
export const ModalOptionTitle = styled.p`
  line-height: 38px;
  color: black;
  height: 20px;
  width: 80%;
  float: left;
`;
export const ModalOptionStatus = styled.p`
  line-height: 38px;
  color: red;
  height: 10px;
  width: 20%;
  float: right;
  text-align: right;
`;

export const ModalOptionList = styled.section`
  height: 50px;
  width: 100%;
  display: block;
  background: #f5f5f5;
  margin: 6px 0;
  padding: 4px;
`;
export const ModalOptionName = styled.p`
  line-height: 20px;
  color: grey;
  height: 25px;
  width: calc(100% - 50px);
  float: left;
`;
export const ModalOptionPrice = styled.p`
  line-height: 20px;
  color: grey;
  height: 25px;
  width: calc(100% - 50px);
  float: left;
`;
export const ModalOptionSelect = styled.img`
  height: 50px;
  width: 50px;
  background: yellow;
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
export const ModalPicker = styled.div`
  height: 30px;
  width: 137px;
  background: turquoise;
`;
export const ModalConfirm = styled.button`
  height: 30px;
  width: 170px;
  background: tomato;
`;
