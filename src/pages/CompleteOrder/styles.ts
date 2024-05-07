import styled from "styled-components"

export const CompleteOrderContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  padding: 2.5rem;
`
