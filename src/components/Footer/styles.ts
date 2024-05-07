import styled from 'styled-components'

export const Footer = styled.footer`
    display: block;
    margin-bottom: 0.5rem;

    span {
        border: 1px solid ${({ theme }) => theme.colors["lightGray"]};
        display: block;
        margin-bottom: 0.5rem;
    }

    p{
        padding: 10px;
    }
`
export const FooterRedes = styled.div`
    max-width: 1224px;
    margin: 0 auto;
`

export const AtendimentoRede = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2.5em;
    padding-top: 2.5em;
`

export const Vindo = styled.div`
    text-align: center;
`

export const Rede = styled.div`
`
