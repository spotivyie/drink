import styled from 'styled-components'
import { breakpoints } from '../../styles/global'

export const CategoryBar = styled.section`
    padding: 26px 100px 26px 100px;
    background-color: ${({ theme }) => theme.colors["black"]};
    color: ${({ theme }) => theme.colors["white"]};

    @media (max-width: ${breakpoints.phone}) {
        padding: 26px 10px 26px 10px;
    }
`

export const Flex = styled.div`
    display: flex;
    align-items: center;

    p{
        padding-left: 10px;
    }

    @media (min-width: ${breakpoints.tablet}) {
        display: none;
    }
`

export const Drinks = styled.div`
    max-width: 70rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${breakpoints.phone}) {
        display: none;
    }
`

export const Bebidas = styled.div`
    color: ${({ theme }) => theme.colors["white"]};
    cursor: pointer;
    text-decoration: none;

    p{
        color: ${({ theme }) => theme.colors["white"]};
    }

    @media (max-width: ${breakpoints.phone}) {
        padding-top: 20px;
        padding-left: 10px;
    }
`

export const Category = styled.div`
    width: 32px;
    padding-left: 10px;

    span {
        height: 2px;
        display: block;
        width: 100%;
        background-color: ${({ theme }) => theme.colors["white"]};
        margin-bottom: 4px;
    }

    @media (min-width: ${breakpoints.tablet}) {
        display: none;
    }
`

export const NavMobile = styled.nav`
    display: none;
    padding: 10px 0;

    &.is-open {
        display: block;
    }
`
