import styled from 'styled-components'
import { breakpoints } from '../../../../styles/global'

export const Licor = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 100px;

    @media (max-width: ${breakpoints.tablet}){
        padding: 40px 20px 100px 20px;
    }
`
