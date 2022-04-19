import React from 'react';
import type { FC, ReactElement } from 'react';

import { StyledIconContainer, StyledInput } from './styles';
import type { StyledInputProps } from './styles';

interface AppInputProps extends StyledInputProps {
  icon?: ReactElement;
}

const AppInput: FC<AppInputProps> = ({ icon, ...props }) => (
  <>
    <StyledInput {...props} />
    {icon && <StyledIconContainer>{icon}</StyledIconContainer>}
  </>
);

export default AppInput;
