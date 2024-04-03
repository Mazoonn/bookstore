import React from 'react';
import {TailSpin} from "react-loader-spinner";
import styled from 'styled-components';

const Spinner = ({ isInner = false, size, color }:any) => {
  if (isInner) {
    return (
      <TailSpin
        height={size || 25}
        width={size || 25}
        color={color || 'black'}
      />
    );
  }

  return (
    <GlobalSpinnerWrapper>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <TailSpin  height={size || 100} width={size || 100} color={color || 'black'} />
      </div>
    </GlobalSpinnerWrapper>
  );
};


export default Spinner;

const GlobalSpinnerWrapper = styled.div`
  position: relative;
`;
