import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  border-radius: 8px;
  padding: 15px;
  border: solid 2.5px ${(props) => props.theme.lightGray};
`;

const Title = ({ children, ...props }) => (
  <Main {...props}>
    {children}
  </Main>
);

export default Title;
