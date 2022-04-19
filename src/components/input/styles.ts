import styled from 'styled-components';
import type { InputHTMLAttributes } from 'react';

export type StyledInputProps = InputHTMLAttributes<HTMLInputElement>;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  border-radius: 20px;
  padding: 10px;
`;

export const StyledIconContainer = styled.div`
  position: absolute;
  right: 25px;
  top: 20px;
`;
