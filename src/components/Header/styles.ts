import styled from "styled-components"
import { breakpoints } from '../../styles/global'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors["white"]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  h1 {
    color: ${({ theme }) => theme.colors["black"]};
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  cursor: inherit;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.colors["white"]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  background: ${({ theme }) => theme.colors["base-card"]};
  color: ${({ theme }) => theme.colors["black"]};

  span {
    background: ${({ theme }) => theme.colors["green"]};
  }
`

export const Login = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 40px;

  p{
    margin: 6px;
  }

  @media (max-width: ${breakpoints.phone}) {
    p{
      display: none;
    }
  }
`