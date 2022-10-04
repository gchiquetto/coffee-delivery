import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HomeBanner = styled.main`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
  background: linear-gradient(
    90.64deg,
    rgba(235, 229, 248, 0.34) 1.47%,
    #ebe5f9 12.48%,
    #f1e9c9 81.75%,
    rgba(241, 233, 201, 0.34) 99.23%
  );
  padding: 5.5rem 0rem;

  img {
    max-width: 29.75rem;
  }

  @media (max-width: 1180px) {
    img {
      max-width: 26.7rem;
    }
  }
  @media (max-width: 1050px) {
    img {
      max-width: 24rem;
    }
  }

  @media (max-width: 998px) {
    flex-wrap: wrap;
    justify-content: center;

    img {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 5.5rem 1rem;
  }

  @media (max-width: 380px) {
    padding: 5.5rem 0.5rem;
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 36.75rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    font-size: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme['gray-800']};
  }

  h2 {
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['gray-700']};
    margin-bottom: 3rem;
  }

  @media (max-width: 1180px) {
    h1 {
      font-size: 2.625rem;
    }
  }
`

export const BannerFeatures = styled.div`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(2, 1fr);
  font-size: 1rem;
  color: ${(props) => props.theme['gray-600']};

  span {
    line-height: 130%;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      height: 2rem;
      width: 2rem;
      color: ${(props) => props.theme['off-white']};
    }

    .shopping {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
    .package {
      background-color: ${(props) => props.theme['gray-600']};
    }
    .timer {
      background-color: ${(props) => props.theme.yellow};
    }
    .coffee {
      background-color: ${(props) => props.theme.purple};
    }

    @media (max-width: 1124px) {
      align-items: flex-start;
    }

    @media (max-width: 998px) {
      align-items: center;
    }

    @media (max-width: 664px) {
      align-items: flex-start;
    }
    @media (max-width: 620px) {
      align-items: center;
    }
    @media (max-width: 569px) {
      align-items: flex-start;
    }
  }
`
export const CoffeeSection = styled.div`
  width: 100%;
  padding: 5.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  strong {
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const CoffeCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 16rem);
  justify-content: space-evenly;
  grid-gap: 2.5rem;
`
