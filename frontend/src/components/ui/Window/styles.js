import styled, { css } from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  position: absolute;

  ${({ isFocused }) =>
    isFocused
      ? css`
          border: 1px solid #2b2929;
          box-shadow: 0px 0px 12px #2b2929;
          z-index: 1;
        `
      : css`
          border: 1px solid #616161;
          box-shadow: 0px 0px 5px #616161;
          z-index: 0;
        `};
`;
