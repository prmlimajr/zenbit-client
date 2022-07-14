import styled from 'styled-components';
import BackgroundImage from '../../assets/bg.svg';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${BackgroundImage}) no-repeat center center/cover;
`;

export const FeedbackFormWrapper = styled.div`
  padding: 0 20px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 150px;
  }
`;
