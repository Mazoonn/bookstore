/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from 'styled-components';
import {Col, Row} from "react-bootstrap";
const AboutUs = () => {
    return (
        <Wrapper>
           <Row>
               <Col>
                    <img width={300}  src='/images/aboutUs.png'/>
               </Col>
               <Col>
                   <h3>Bookshop works to connect readers with independent booksellers all over the world.</h3>
                   <br/>
                   <h4>We believe local bookstores are essential community hubs that foster culture, curiosity, and a
                       love of reading, and we're committed to helping them thrive.</h4>
                   <br/>
                   Every purchase on the site financially supports independent bookstores. Our platform gives
                   independent bookstores tools to compete online and financial support to help them maintain their
                   presence in local communities.
               </Col>
           </Row>
            <Row>
               <h3>Since 2024, we've raised more than $0.5 million for independent bookstores.</h3>
            </Row>
        </Wrapper>
    );
};

export default AboutUs;

const Wrapper = styled.div`
  background: #fff;
  box-shadow: 0px 14px 34px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  width: fit-content;
  height: fit-content;
  margin: 40px;
  margin-top: 60px;
  margin-right: 16px;

  div {
    padding: 10px;
  }
  .row {
    display: flex;
    justify-content: center;
    align-items: center
  }
  button {
    margin: 10px;
  }
`;
