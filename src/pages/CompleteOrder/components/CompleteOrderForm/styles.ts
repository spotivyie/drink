import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";
import { breakpoints } from "../../../../styles/global";

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  @media (max-width: ${breakpoints.tablet}){
    width: 100%;
  }
`

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  column-gap: 0.75rem;
  row-gap: 1rem;

  @media (max-width: ${breakpoints.tablet}){
    display: block;
  }
`

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors["base-error"]};
  }

  @media (max-width: ${breakpoints.tablet}){
    display: block;
  }
`

export const Row = styled.div`
width: 100%;
display: grid;
grid-template-columns: 12.5rem 17.25rem 3.75rem;
column-gap: 0.75rem;
row-gap: 1rem;
grid-auto-flow: dense;

.cep {
  grid-column: span 3;
  max-width: 12.5rem;
}

.street {
  grid-column: span 3;
}

.complement {
  grid-column: span 2;
}

    @media (max-width: ${breakpoints.tablet}) {
        column-gap: 14px;
        padding-bottom: 16px;
        display: block;
        grid-template-colums: 2fr;

        .cep {
          max-width: 100%;
        }

        // display: flex;
        // flex-direction: column;
    }
`
