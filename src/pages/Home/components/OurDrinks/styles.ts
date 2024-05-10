import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"

export const OurDrinksContainer = styled.section`
  padding: 20px 100px 80px 100px;
  
  h3{
    line-height: 130%;
    font-size: 30px;
    text-align: center;
  }

  @media (max-width: ${breakpoints.tablet}){
    padding: 20px 60px 80px 60px;
  }

  @media (max-width: ${breakpoints.phone}){
    padding: 40px 0px;
  }
`

export const DrinkList = styled.div`
`

export const VendidosBar = styled.div`
  padding-top: 2rem;
  max-width: 1224px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}){
    padding-top: 4rem;
  }

  @media (max-width: ${breakpoints.phone}){
    padding: 40px 12px;
  }
`