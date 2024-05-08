import styled from "styled-components"
import { breakpoints } from "../../../styles/global"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    row-gap: 10px;

    @media (max-width: ${breakpoints.tablet}){
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${breakpoints.phone}){
        grid-template-columns: repeat(1, 1fr);
    }
`
