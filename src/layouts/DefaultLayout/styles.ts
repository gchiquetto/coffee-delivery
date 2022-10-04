import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 10rem;

  @media (max-width: 1610px) {
    padding: 0 8rem;
  }

  @media (max-width: 1393px) {
    padding: 0 6rem;
  }

  @media (max-width: 1330px) {
    padding: 0 4rem;
  }

  @media (max-width: 1266px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
  @media (max-width: 420px) {
    padding: 0 0.5rem;
  }
`
