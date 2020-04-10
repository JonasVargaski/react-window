import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  cursor: move;
  background: ${({ isFocused }) => (isFocused ? '#2b2929' : '#555')};
`;

export const GrabContainer = styled.div.attrs({
  id: 'grab-touch',
})`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 15px;
  color: #e8e8e8;
  font-weight: 500;
  user-select: none;
`;

export const Actions = styled.section`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  border: none;
  height: 20px;
  width: 20px;
  margin-left: 7px;
  background: transparent;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;
