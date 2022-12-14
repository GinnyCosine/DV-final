import React from 'react';
import { noop } from 'lodash';
import styled from 'styled-components';

const Main = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: large;
`;

const Title = ({ children, onClick = noop, ...props }) => (
  <Main {...props}>
    {children}
  </Main>
);

export default Title;
