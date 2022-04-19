import React from 'react';
import type { FC } from 'react';

import StyledAvatar from './styles';

interface AppAvatarProps {
  url: string;
}

const AppAvatar: FC<AppAvatarProps> = ({ url }) => <StyledAvatar path={url} />;

export default AppAvatar;
