import styled from 'styled-components'

export const CheckoutFormContainerContent = styled.div``
const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  gap: 2rem;
  padding: 2.5rem;

  @media (max-width: 434px) {
    padding: 1.5rem;
  }

  @media (max-width: 390px) {
    padding: 1rem;
  }
`

export const CheckoutFormAddressContainer = styled(BaseContainer)``

export const CheckoutFormPaymentContainer = styled(BaseContainer)``

export const CheckoutInformationCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-600']};
  }
`
export const CheckoutFormData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    border: 1px solid ${(props) => props.theme['gray-300']};
    border-radius: 4px;
    padding: 0.75rem;
    font-size: 0.75rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-600']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  div {
    display: flex;

    gap: 0.75rem;

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  .input_md {
    width: 12.5rem;
  }

  .input_sm {
    width: 3.75rem;
  }

  .input_1f {
    flex: 1;
  }
`

export const PaymentOptionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  input[type='radio'] {
    display: none;

    &:checked + label {
      border: 1px solid ${(props) => props.theme.purple};
      background-color: ${(props) => props.theme['purple-light']};
    }
  }

  label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple};
      font-size: 0.875rem;
    }

    &:hover {
      background-color: ${(props) => props.theme['gray-400']};
    }
  }
`
export const PaymentOption = styled.label``
