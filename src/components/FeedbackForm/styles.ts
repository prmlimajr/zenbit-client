import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 557px;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  color: ${theme.colors.txtPrimary};
  margin-bottom: 30px;
`;

export const FieldWrapper = styled.div`
  margin: 4px 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 19px;
  width: 218px;
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  color: ${theme.colors.alert};
`;
