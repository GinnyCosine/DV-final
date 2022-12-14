import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Link from '../Themes/Components/Link';

const Navbar = styled.div`
  background-color: ${(props) => props.theme.gray};
  width: 100%;
  font-family: 'Nunito', 'Noto Sans TC', sans-serif;
  position: sticky;
  top: 0;
  left: 0;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  margin: 10px;
  color: ${(props) => props.theme.lightGreen};
  flex: 1;
  padding: 0 20px;
  
  :hover{
    color: ${(props) => props.theme.yellow};
    transition: all 0.5s;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  margin: auto;
  width: fit-content;
  padding: 15px 0px;
`;

class NavbarCustom extends PureComponent {
  render() {
    return (
      <Navbar>
        <LinksWrapper>
            <StyledLink to="/page1">Page 1</StyledLink>
            <StyledLink to="/page2">Page 2</StyledLink>
        </LinksWrapper>
      </Navbar>
    );
  }
}


export default NavbarCustom;
