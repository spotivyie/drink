import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"

export const DrinkList = styled.div`
    margin: 0 auto;
    width: 100%;
    padding-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 3.5rem; 

    @media (max-width: ${breakpoints.tablet}){
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2.0rem;
        row-gap: 2.0rem;
    }
    
    @media (max-width: ${breakpoints.phone}){
        grid-template-columns: repeat(2, 1fr);
        column-gap: 0rem;
        row-gap: 0rem;
    }
`
