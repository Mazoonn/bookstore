import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <Content>
        <span>Powered By</span>
        <b>Matan Nunberg</b>
      </Content>
    </FooterWrapper>
  );
};


export default Footer;

const FooterWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 15px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  span {
    font-size: 14px;
    font-weight: 500;
    font-style: italic;
    color: #1a1a1a;
    margin-right: 6px;
    white-space: nowrap;
  }

  img {
    height: 16px;
  }
`;
