import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;

  img {
    max-width: 30.75rem;
  }

  @media (max-width: 1080px) {
    justify-content: center;

    img {
      max-width: 100%;
    }
  }
`

export const SuccessContent = styled.div`
  padding: 1rem 0;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 130%;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
  }

  .gradient_border-wrapper {
    max-width: 32.875rem;
    min-width: 26.625rem;
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    padding: 1px;
    background-image: linear-gradient(
      to right,
      rgba(219, 172, 44, 1),
      rgba(128, 71, 248, 1)
    );
    border-radius: 6px 36px;
    overflow: hidden;

    @media (max-width: 380px) {
      min-width: 100%;
    }
  }
`

export const OrderInformationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['off-white']};
`

const BaseInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme['gray-600']};

  div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: ${(props) => props.theme['off-white']};
  }

  p {
    font-weight: 400;
    font-size: 1rem;
  }

  strong {
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
  }
`

export const LocalInformation = styled(BaseInformation)`
  div:first-of-type {
    background-color: ${(props) => props.theme.purple};
  }
`

export const DeliveryTimeInformation = styled(BaseInformation)`
  div:first-of-type {
    background-color: ${(props) => props.theme.yellow};
  }
`

export const PaymentInformation = styled(BaseInformation)`
  div:first-of-type {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
