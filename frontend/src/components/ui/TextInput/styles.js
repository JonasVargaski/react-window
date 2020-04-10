import styled, { css as injectCss } from 'styled-components';
import { Element } from '../Core';

export const Container = styled(Element)`
  position: absolute;
  border: 1px solid #ccc;

  input {
    margin: 0;
    border: none;
    padding: 0 2px;
    background: transparent;

    &:focus {
      background: #fefefe;
      box-shadow: 0px 0px 4px #666;
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
