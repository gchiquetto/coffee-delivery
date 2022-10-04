import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100rem;
  height: 100vh;
  margin: 0 auto;

  @media (max-width: 1660px) {
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
