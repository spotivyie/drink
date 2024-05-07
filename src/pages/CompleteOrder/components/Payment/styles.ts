import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"

export const Row = styled.div`
    display: flex;
    column-gap: 14px;
    align-items: flex-end;
    padding-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
    }
`

export const InputGroup = styled.div`
    flex: auto;

    input,
    select {
        padding: 0 0.75rem;
        width: 100%;
        border: 1px solid ${({ theme }) => theme.colors["base-button"]};
        background: ${({ theme }) => theme.colors["base-input"]};
        color: ${({ theme }) => theme.colors["base-label"]};
        border-radius: 4px;
        font-size: 0.75rem;
        height: 2.625rem;

        &.error {
            border: 1px solid red;
        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 16px;
    }
`