import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  font-family: 'Nunito', 'Noto Sans TC', sans-serif;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  padding: 10px 0;
  color: ${(props) => props.theme.gray};

`;

class Header extends PureComponent {
  render() {
    return (
      <Main>
        Data Visualization Final Project
      </Main>
    );
  }
}


export default Header;
