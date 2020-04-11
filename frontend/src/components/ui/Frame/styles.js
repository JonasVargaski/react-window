import styled, { css as injectCss } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  border: 1px solid #ccc;
  background: #fbfbfb;

  ${({ css }) =>
    css &&
    injectCss`
      ${css}
    `}
`;
