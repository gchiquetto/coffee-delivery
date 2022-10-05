import { HeaderContainer, HeaderDetails } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeLogo from './../../assets/logo-coffee-delivery.svg'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img
          src={coffeeLogo}
          alt="Logo: Purple cup of cup with a rocket in the middle and the sentence 'Coffe Delivery"
        />
      </a>
      <HeaderDetails>
        <span>
          <MapPin size={22} weight="fill" color="#8047F8" />
          Enschede, Netherlands
        </span>
        <a href="/checkout">
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
        </a>
      </HeaderDetails>
    </HeaderContainer>
  )
}
