import React from 'react';
import type { FC, ReactNode } from 'react';

import { StyledText } from './styles';
import type { StyledTextProps } from './styles';

interface AppTextProps extends StyledTextProps {
  children?: ReactNode;
}

const AppText: FC<AppTextProps> = ({ children, ...props }) => <StyledText {...props}>{children}</StyledText>;

export default AppText;
