import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"

export const Row = styled.div`
    display: flex;
    column-gap: 14px;
    padding-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
        grid-template-colums: 2fr;

        // display: flex;
        // flex-direction: column;
    }
`

export const InputGroup = styled.div`
    flex: auto;

    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 16px;
    }
`