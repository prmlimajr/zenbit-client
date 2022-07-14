import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.button`
  background: ${theme.colors.btnPrimary};
  color: ${theme.colors.txtTertiary};
  width: 100%;
  height: 73px;
  border: 0;
  border-radius: 500px;
  padding: 27px 52px;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
