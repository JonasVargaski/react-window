import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #2b2929;
  border-radius: 4px;
  position: absolute;
  background: lightgray;
  box-shadow: 0px 0px 12px #2b2929;

  opacity: ${({ isGrabed }) => (isGrabed ? '0.6' : '1')};
`;
