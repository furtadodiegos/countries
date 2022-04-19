import React from 'react';
import { Outlet } from 'react-router-dom';
import type { FC } from 'react';

import StyledContainer from './styles';

const AppLayout: FC = () => {
  return (
    <StyledContainer>
      <Outlet />
    </StyledContainer>
  );
};

export default AppLayout;
