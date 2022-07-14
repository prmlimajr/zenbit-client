import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
`;

export const TextInput = styled.input`
  width: 100%;
  border: none;
  padding: 0 10px;

  &:focus {
    outline: none;
  }
`;
