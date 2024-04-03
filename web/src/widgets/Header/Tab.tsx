import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Tab = ({ title, redirectLink }:any) => {
    const navigate = useNavigate();

  return (
    <TabStyle>
      <h6
        onClick={() => {
            navigate(redirectLink);
        }}
      >
        {title}
      </h6>
    </TabStyle>
  );
};


export default Tab;

const TabStyle = styled.div`
  white-space: nowrap;
  padding: 20px;
  display: flex;
`;
