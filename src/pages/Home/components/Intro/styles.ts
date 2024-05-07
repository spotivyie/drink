import styled from "styled-components"
import introBackgroundImg from "../../../../assets/intro-background.png"
import { TitleText } from "../../../../components/Typography"
import { rgba } from "polished"

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;

  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme.colors["base-card"]} 0%,
      ${rgba(theme.colors["base-background"], 0.2)} 50%,
      ${theme.colors["white"]} 100%
    )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const IntroContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  img{
    width: 500px;
    height: 360px;
  }
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
