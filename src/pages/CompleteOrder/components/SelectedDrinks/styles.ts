import styled from "styled-components"
import { SectionBaseStyle } from "../../styles"
import { breakpoints } from "../../../../styles/global"

export const SelectedDrinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding-top: 60px;
    align-items: center;
  }
`

export const DetailsContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

`
