import styled, { css } from 'styled-components';

export const Element = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: unset;
  color: #000;
  resize: none;
  font-size: ${({ theme }) => theme.fontSizes.element};
  font-family: ${({ theme }) => theme.fonts};

  ${({ isRequired }) =>
    isRequired &&
    css`
      border-left: 1px solid #ff2727;
    `}
`;
