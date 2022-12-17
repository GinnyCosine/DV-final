import React, { useState } from 'react';
import styled from 'styled-components';
import Link from '../Themes/Components/Link';

const Navbar = styled.div`
  background-color: ${(props) => props.theme.gray};
  width: 100%;
  font-family: 'Nunito', 'Noto Sans TC', sans-serif;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.5s;
  opacity: ${(props) => props.show ? 1 : 0.85};

  :hover{
    opacity: 1;
  }
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  margin: 10px;
  color: ${(props) => props.theme.lightGreen};
  flex: 1;
  padding: 0 20px;
  font-weight: 500;
  
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

const NavbarCustom = () => {
  const [showBar, setShowBar] = useState(true);
  const checkScrollTop = () => {
    if (showBar && window.pageYOffset > 85) {
      setShowBar(false);
    } else if (!showBar && window.pageYOffset <= 85) {
      setShowBar(true);
    }
  };
  window.addEventListener('scroll', checkScrollTop);

  return (
    <Navbar show={showBar}>
      <LinksWrapper>
          <StyledLink to="/page1">Select By County</StyledLink>
          <StyledLink to="/page2">Select By Multiple Features</StyledLink>
      </LinksWrapper>
    </Navbar>
  );
}


export default NavbarCustom;
