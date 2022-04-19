import styled, { css } from 'styled-components';

interface FlexProps {
  justifyContent?: 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly' | 'center';
  alignItems?: 'flex-end' | 'flex-start' | 'center';
}

interface AppContainerProps extends FlexProps {
  flexDirection?: 'row' | 'column';
  fullWidth?: boolean;
}

export const AppContainer = styled.div<AppContainerProps>`
  ${({ flexDirection = 'row', justifyContent = 'flex-start', alignItems = 'flex-start', fullWidth }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    width: ${fullWidth ? '100%' : 'auto'};
  `}
`;

export const AppCard = styled.div`
  height: 180px;
  width: 100%;
  border-radius: 20px;
`;
