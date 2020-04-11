import styled, { css as injectCss } from 'styled-components';
import { Element } from '../Core';

export const Container = styled(Element)`
  position: absolute;
  z-index: 2;
  border: 1px solid #ccc;

  input {
    margin: 0;
    border: none;
    padding: 0 2px;
    background: transparent;
    font-size: ${({ theme }) => theme.fontSizes.input};
    font-family: ${({ theme }) => theme.fonts};

    &:focus {
      background: #fefefe;
      box-shadow: 0px 0px 2px 1px #666;
    }

    &:disabled {
      background: #ddd;
      cursor: not-allowed;
    }
  }

  ${({ css }) =>
    css &&
    injectCss`
      ${css}
    `}
`;
