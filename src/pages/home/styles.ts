import { FiChevronRight } from 'react-icons/fi';
import styled, { css } from 'styled-components';

import { AppContainer, AppText } from '../../components';

export const Container = styled(AppContainer)`
  padding: 10px;
`;

export const Title = styled(AppText)`
  padding-left: 10px;
`;

export const GoButton = styled(FiChevronRight)``;

interface ChipProps {
  selected: boolean;
}

export const Chip = styled.div<ChipProps>`
  ${({ selected }) => css`
    background-color: ${selected ? '#4185F4' : 'transparent'};
    border: 1px solid #f4f5f7;
    border-radius: 50px;
    padding: 0 10px;
    color: ${selected ? '#FFFFFF' : '#000000'};
  `}
`;
