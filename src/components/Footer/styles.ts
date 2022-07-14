import styled from 'styled-components';
import FooterBackground from '../../assets/footer.svg';

export const Container = styled.section`
  height: 100px;
  width: 100%;
  background: url(${FooterBackground}) no-repeat center center/cover;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
    height: 200px;
  }
`;

export const Contacts = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  list-style: none;
  width: 226px;

  @media (min-width: 768px) {
    margin-left: 350px;
  }
`;

export const Contact = styled.li``;

export const Clickable = styled.a``;

export const Icon = styled.img`
  height: 16px;
`;
