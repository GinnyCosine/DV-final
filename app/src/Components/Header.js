import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  text-align: center;
  font-family: 'Nunito', 'Noto Sans TC', sans-serif;
  height: 85px;
  padding: 10px 0;
  box-sizing: border-box;
  color: ${(props) => props.theme.gray};
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.green};
`;

class Header extends PureComponent {
  render() {
    return (
      <Main>
        <Title>Traffic Accident Analysis</Title>
        <Subtitle>Group 12 Data Visualization Final Project</Subtitle>
      </Main>
    );
  }
}


export default Header;
