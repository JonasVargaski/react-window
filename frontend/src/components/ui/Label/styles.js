import styled, { css as injectCss } from 'styled-components';

export const Container = styled.label`
  position: absolute;
  display: table-cell;
  color: #222;
  line-height: 1.4;
  white-space: pre;
  overflow: hidden;
  margin: 1px;
  padding: 0 1px;
  z-index: 2;
  user-select: none;
  font-size: ${({ theme }) => theme.fontSizes.label};
  font-family: ${({ theme }) => theme.fonts};

  ${({ css }) =>
    css &&
    injectCss`
      ${css}
    `}
`;
