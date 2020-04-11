import styled, { css } from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  position: absolute;

  ${({ isFocused }) =>
    isFocused
      ? css`
          border: 1px solid #2b2929;
          box-shadow: 0px 0px 15px -1px #2b2929;
          z-index: 1;
        `
      : css`
          border: 1px solid #616161;
          box-shadow: 0px 0px 5px 2px #616161;
          z-index: 0;
        `};
`;

export const Content = styled.div`
  height: calc(100% - 31px);
  width: 100%;
  background: #fefefe;
  position: relative;
  border-radius: 3px;
`;
