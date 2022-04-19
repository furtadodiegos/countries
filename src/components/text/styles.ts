import styled, { css } from 'styled-components';

export interface StyledTextProps {
  bold?: number;
  fontSize?: number;
}

export const StyledText = styled.p<StyledTextProps>`
  ${({ bold = 400, fontSize = 16 }) => css`
    font-size: ${`${fontSize}px`};
    font-weight: ${bold};
  `}
`;
