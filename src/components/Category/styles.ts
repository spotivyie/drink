import styled from 'styled-components'
import { breakpoints } from '../../styles/global'

export const CategoryBar = styled.section`
    padding: 26px 100px 26px 100px;
    background-color: ${({ theme }) => theme.colors["black"]};
    color: ${({ theme }) => theme.colors["white"]};
`

export const Drinks = styled.div`
    max-width: 70rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${breakpoints.phone}) {
        justify-content: center;
    }
`

export const Bebidas = styled.div`
    color: ${({ theme }) => theme.colors["white"]};
    cursor: pointer;
    text-decoration: none;

    @media (max-width: ${breakpoints.phone}) {
        padding: 8px;
    }
`
