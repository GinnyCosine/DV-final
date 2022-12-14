import React from 'react';
import { noop } from 'lodash';
import styled from 'styled-components';

const Main = styled.button`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  outline: none;
  border: none;
  height: ${(props) => props.size}px;
  line-height: ${(props) => props.size}px;
  width: ${(props) => props.size * 4.5}px;
  padding: 5px 20px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.green};
  border-radius: 10px;
  margin-right: 5px;
  font-size: 1em;
  font-weight: 500;
  letter-spacing: normal;
  font-family: 'Nunito', 'Noto Sans TC', sans-serif;

  ${(props) => props.oval && `
    border-radius: ${props.size ? props.size * 0.7 : 25}px;
  `}

  :hover{
    color: ${(props) => props.theme.green};
    background-color: ${(props) => props.theme.lightGreen};
    transition: all 0.3s;
  }

  :focus{
    outline: none;
  }
`;

const Button = ({ children, onClick = noop, ...props }) => (
  <Main onClick={onClick} {...props}>
    {children}
  </Main>
);

export default Button;
