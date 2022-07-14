import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export function Button({ children, isLoading, ...rest }: IButtonProps) {
  return <Container {...rest}>{isLoading ? 'Loading...' : children}</Container>;
}
