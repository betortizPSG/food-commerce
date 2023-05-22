import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-gap: 1.75rem;

  .snack {
    position: relative;
    background: ${({ theme }) => theme.colors.black};
    padding: 1.75rem 1.5rem;
    border-radius: 4px;

    span {
      position: absolute;
      top: -0.7rem;
      right: -0.7rem;

      background: ${({ theme }) => theme.colors.red};
      width: 3rem;
      height: 3rem;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.125rem;
      font-weight: 500;
    }

    h2 {
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
    }

    img {
      object-fit: over;
      width: 100%;
      height: 11.25rem;
      border-radius: 4px;
      margin-bottom: 0.375rem;
    }

    p {
      font-size: 0.875rem;
    }

    div {
      margin-top: 0.875rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      strong {
        font-size: 2rem;
        font-weight: 500;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        background: ${({ theme }) => theme.colors.red};
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 50%;
        font-weight: 700;
        transition: filter 0.2s;

        &:hover {
          background: ${({ theme }) => darken(0.2, theme.colors.red)};
        }

        svg {
          stroke: ${({ theme }) => theme.colors.white};
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1);
  }
`
