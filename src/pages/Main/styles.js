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
`;

export const CardTitle = styled.p`
  font-size: 20px;
  color: grey;
  border-bottom-style: solid;
  border-bottom-color: darkgray;
  margin: 10px 0;
  border-width: 1px;
  width: 100%;
`;

export const CardPrice = styled.p`
  width: 100%;
  font-size: 15px;
  color: grey;
`;
