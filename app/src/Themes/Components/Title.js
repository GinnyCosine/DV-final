import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  font-family: 'Nunito', 'Noto Sans TC', sans-serif;
  color: ${(props) => props.theme.blue};
  font-size: 2.2em;
  font-weight: 500;
  padding-bottom: 20px;
`;

const Title = ({ children, ...props }) => (
  <Main {...props}>
    {children}
  </Main>
);

export default Title;
