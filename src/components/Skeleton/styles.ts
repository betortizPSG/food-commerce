import styled, { css, keyframes } from 'styled-components'

import { SkeletonProps } from '.'

const shimmerEffect = keyframes`
  0% {
    background-position: 0%;
  }
  50% {
    background-position: -50%;
  }
  75% {
    background-position: -125%;
  }
  100% {
    background-position: -200%;
  }
`

export const SkeletonElement = styled.div<SkeletonProps>`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gray900} 0%,
    #0a0a0a 40%,
    ${({ theme }) => theme.colors.gray900} 100%
  );
  background-size: 200%;
  border-radius: 4px;
  animation: ${shimmerEffect} 1.2s ease-in-out infinite;

  ${({ type }) => type === 'title' && css`
    height: 32px;
    width: 75%;
    margin: 0.5rem 0;
  `}

  ${({ type }) => type === 'text' && css`
    height: 18px;
    width: 100%;
    margin: 0.25rem 0;
    `}

  ${({ type }) => type === 'image' && css`
    height: 200%;
    width: 200%;
    border-radius: 50%;
    margin: 0.25rem 0;
  `}

  ${({ type }) => type === 'thumbnail' && css`
    height: 200px;
    width: 100%;
    border-radius: 10px;
    margin: 0.5rem 0;
  `}
`;
