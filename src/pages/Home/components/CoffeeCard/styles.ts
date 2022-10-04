import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 130%;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-700']};
  }

  p {
    font-weight: 400;
    line-height: 130%;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-500']};
    text-align: center;
  }
`

export const CoffeeTypesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  span {
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    background-color: ${(props) => props.theme['yellow-light']};
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
  }
`
export const CoffeeCardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    cursor: pointer;
  }

  .price-tag {
    display: flex;
    gap: 0.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-600']};

    span {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }

  .quantity-cart_container {
    display: flex;
    gap: 0.5rem;
  }

  .quantity-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-300']};

    button {
      color: ${(props) => props.theme.purple};
      font-size: 0.875rem;
      border: 0;
      width: 0.875rem;
      height: 0.875rem;
      background-color: transparent;
    }

    span {
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['gray-800']};
    }
  }
  & .shopping-cart {
    padding: 0.5rem;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['gray-100']};
    border: 0;
    border-radius: 6px;
  }
`
