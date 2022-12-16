import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-bottom: 15px;
`;

const Label = styled.div`
  margin-right: 30px;
  margin-left: 10px;
  color: ${(props) => props.theme.gray};
`;

const Square = styled.div`
  width: 20px;
  height: 20px;
  background: ${(props) => props.color};
`;

const Item = styled.div`
  display: flex;
  align-items: center;
`;

const Legend = ({ list, ...props }) => (
  <div {...props}>
    <Wrapper>
      {
        list.map((element, index) => (
          <Item key={`legend-${element.text}`}>
            <Square color={element.color} />
            <Label>{element.text}</Label>
          </Item>
        ))
      }
    </Wrapper>
  </div>
);

export default Legend;
