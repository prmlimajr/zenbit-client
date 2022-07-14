import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  height: 190px;
`;

export const TextInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:focus {
    outline: none;
  }
`;
