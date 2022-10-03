import styled from 'styled-components'

const BaseFormat = styled.div`
  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
  }
`

export const HeaderContainer = styled(BaseFormat)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
`

export const HeaderDetails = styled(BaseFormat)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  span {
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    font-size: 0.875rem;
    line-height: 130%;
    gap: 0.25rem;
    padding: 0.5rem;
  }

  a {
    padding: 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
  }
`
