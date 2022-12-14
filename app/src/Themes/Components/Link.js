import React from 'react';
import styled from 'styled-components';

const Main = styled.span`
  cursor: pointer;
  color: ${(props) => props.theme.white};
  font-weight: 500;
  /* ${(props) => props.rightBorder && `
    border-right: solid 1px #fff;
  `} */
`;

const LinkBase = styled.a`
  text-decoration: none;
  &:hover {
    color: transparent;
  }
`;

const Link = ({
  to = '/', className, children, ...props
}) => (
  <LinkBase href={to}>
    <Main {...props} className={className}>{children}</Main>
  </LinkBase>
);

export default Link;
