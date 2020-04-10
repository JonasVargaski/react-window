import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 33px;
  background: #2b2929;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  cursor: ${({ moved }) => (moved ? 'move' : 'not-allowed')};
`;

export const Title = styled.div`
  font-size: 15px;
  color: #e8e8e8;
  font-weight: 500;
  user-select: none;
`;

export const Actions = styled.div`
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
