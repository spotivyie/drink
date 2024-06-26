import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"


export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors["white"]};
  color: ${({ theme }) => theme.colors["black"]};
  border: 1px solid ${({ theme }) => theme.colors["black"]};
  display: inline-block;
  position: relative;
  text-decoration: none;
  margin: 4px;

  img {
    width: 100%;
    height: 350px;
    display: block;
    object-fit: cover;
    padding: 0px 18px;
    margin-top: 10px;
  }

  @media (max-width: ${breakpoints.phone}){
    img{
      padding: 0px;
    }
  }
`

export const Name = styled.div`
  font-size: 14px;
  margin: 20px 10px;
  text-align: center;
  height: 20px;

  @media (max-width: ${breakpoints.tablet}){
    padding: 0px 39px;
  }

  @media (max-width: ${breakpoints.phone}){
    padding: 20px 0px;
  }
`

export const AddCartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  @media (max-width: ${breakpoints.phone}) {
    margin: 20px 14px;
    align-items: center;
  }
`

export const Descricao = styled.p`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: ${breakpoints.phone}) {
    margin-top: 30px;
  }
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors["green"]};
  border: 1px solid ${({ theme }) => theme.colors["green"]};
  color: ${({ theme }) => theme.colors["white"]};
  font-weight: bold;
  padding: 8px;
  margin-right: 20px;
  font-size: 8px;
  cursor: pointer;

  h1 {
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.phone}) {
    margin-right: 0px;
  }
`