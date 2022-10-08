import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 2.5rem 0rem;

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
  }

  form {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`

export const CheckoutFormContainer = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CheckoutSummary = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const CheckoutSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;

  @media (max-width: 434px) {
    padding: 1.5rem;
  }

  @media (max-width: 390px) {
    padding: 1rem;
  }
`
export const CheckoutSummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  div:not(:last-child) {
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
    line-height: 130%;

    p:last-of-type {
      font-size: 1rem;
    }
  }

  div:last-of-type {
    color: ${(props) => props.theme['gray-700']};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
  }
`

export const CheckoutButton = styled.button`
  border: none;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
