import styled from 'styled-components'

export const CheckoutCoffeeCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  gap: 2rem;

  img {
    width: 4rem;
  }

  .item-value {
    margin-left: auto;
  }
`
export const CheckoutCardData = styled.data`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-600']};

  svg {
    color: ${(props) => props.theme.purple};
    font-size: 0.875rem;
  }
`

export const CheckoutCardCTA = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const QuantityBox = styled(Box)`
  button {
    border: 0;
    width: 0.875rem;
    height: 0.875rem;
    background-color: transparent;
    cursor: pointer;
  }

  span {
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const BoxDefault = styled(Box)`
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['gray-400']};
  }
`
