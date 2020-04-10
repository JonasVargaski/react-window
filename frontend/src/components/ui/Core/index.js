import styled, { css } from 'styled-components';

export const Element = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 12px;
  z-index: unset;
  color: #000;
  font-family: Arial;
  resize: none;

  ${({ isRequired }) =>
    isRequired &&
    css`
      border-left: 1px solid #ff2727;
    `}
`;
