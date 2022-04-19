import styled, { css } from 'styled-components';

export default styled.div<{ path: string }>`
  ${({ path }) => css`
    border-radius: 50px;
    background: ${`url(${path})`};

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    height: 30px;
    width: 30px;
  `}
`;
