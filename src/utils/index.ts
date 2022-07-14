import { BaseSyntheticEvent } from 'react';

export const removeReadOnly = (e: BaseSyntheticEvent) =>
  e.target.removeAttribute('readonly');
