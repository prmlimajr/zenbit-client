import { InputHTMLAttributes } from 'react';

import { Container, TextInput } from './styles';

type IInputProps = InputHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ ...rest }: IInputProps) {
  return (
    <Container>
      <TextInput {...rest} />
    </Container>
  );
}
