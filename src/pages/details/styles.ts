import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AppContainer, AppText } from '../../components';

export const Container = styled(AppContainer)`
  padding: 10px;
`;

export const BackButton = styled(FiChevronLeft)``;

export const Title = styled(AppText)`
  padding: 0 10px;
`;

export const StyledLink = styled(Link)`
  padding-right: 5px;
  text-decoration: none;
`;
