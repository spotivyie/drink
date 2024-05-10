import styled from "styled-components"
import { breakpoints } from "../../../styles/global"

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    row-gap: 10px;

    @media (max-width: ${breakpoints.tablet}){
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${breakpoints.phone}){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 6px;
        row-gap: 6px;
    }
`
