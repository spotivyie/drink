import styled from "styled-components"
import { breakpoints } from '../../styles/global'

export const Search = styled.div`
    @media (max-width: ${breakpoints.phone}) {
        display: none;
    }
`

export const Input = styled.input`
    padding: 12px 200px 12px 16px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors["base-card"]};
    border: ${({ theme }) => theme.colors["base-card"]};
`

export const Itens = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    list-style: none;
    padding: 16px 120px 16px 16px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors["white"]};
    color: ${({ theme }) => theme.colors["black"]};

    li{
        padding: 10px 0px;
        cursor: pointer;
    }
`