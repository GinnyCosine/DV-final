import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 300px;
  width: 100%;
  background-color: ${(props) => props.theme.gray};
  font-family: 'Nunito', 'Noto Sans TC', sans-serif;
`;

const TagWrapper = styled.div`
  display: flex;
  width: 300px;
  margin: auto;
`;

const Tag = styled.div`
  color: ${(props) => props.theme.lightGreen};
  font-size: 15px;
  flex: 1;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 50px;
`;

class Footer extends PureComponent {
  render() {
    return (
      <Wrapper>
        <TagWrapper>
          <Tag>GROUP 12</Tag>
          <Tag>宋沛潔</Tag>
          <Tag>簡妤璇</Tag>
          <Tag>張育誠</Tag>
        </TagWrapper>
      </Wrapper>
    );
  }
}

export default Footer;
