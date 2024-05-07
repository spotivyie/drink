import styled from "styled-components"

export const OurDrinksContainer = styled.section`
    padding: 20px 100px 80px 100px;
    background-color: ${({ theme }) => theme.colors["black"]};
    
    h3{
        line-height: 130%;
        color: ${({ theme }) => theme.colors["white"]};
        font-size: 30px;
        text-align: center;
    }
`

export const DrinkList = styled.div`
`

export const VendidosBar = styled.div`
    padding-top: 2rem;
    max-width: 1224px;
    width: 100%;
    margin: 0 auto;
`