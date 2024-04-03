import React from 'react';
import styled, { css } from 'styled-components';

const buttonDisableDefault = {
  background: '#f8f8f8',
  border: '1px solid #e9ecef',
  color: '#c4c4c4'
};

const ButtonPaddingDefault = '12px 16px';

const buttonThemes = {
  primary: {
    background: '#5a51fd',
    color: '#fff',
    border: 'none',
    hover: {
      background: '#7871fa'
    },
    active: {
      background: '#4840e1'
    },
    disabled: { ...buttonDisableDefault },
    padding: ButtonPaddingDefault
  },
};

const BasicButton = ({
  onClick,
  children,
  type = 'button',
  disabled = false,
  className,
}: any) => (
  <StyledButton
    className={className}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default BasicButton;

const StyledButton = styled.button`
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  transition: 0.2s;
  min-width: 75px;

  ${(typeTheme) => css`
    background: ${buttonThemes.primary.background};
    color: ${buttonThemes.primary.color};
    border: ${buttonThemes.primary.border};
    padding: ${buttonThemes.primary.padding};
    &:hover {
      background: ${buttonThemes.primary.hover.background};
    }
    &:active {
      background: ${buttonThemes.primary.active.background};
    }
    &:disabled {
      pointer-events: none;
      background: ${buttonThemes.primary.disabled.background};
      border: ${buttonThemes.primary.disabled.border};
      color: ${buttonThemes.primary.disabled.color};
    }
  `}
`;
