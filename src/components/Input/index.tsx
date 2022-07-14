import { InputHTMLAttributes } from 'react';

import { Container, TextInput } from './styles';

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...rest }: IInputProps) {
  return (
    <Container>
      <TextInput {...rest} />
    </Container>
  );
}
