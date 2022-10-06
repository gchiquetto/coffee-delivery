import { HeaderContainer, HeaderDetails, QuantityContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeLogo from './../../assets/logo-coffee-delivery.svg'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Header() {
  const { selectedCoffees } = useContext(CoffeesContext)
  let total = 0

  if (selectedCoffees.length > 0) {
    const quantity = selectedCoffees.map((coffee) => coffee.quantity)

    total = quantity.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    )
  }
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
        <a className="cart-button" href="/checkout">
          {total > 0 && (
            <QuantityContainer>
              <p>{total}</p>
            </QuantityContainer>
          )}
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
        </a>
      </HeaderDetails>
    </HeaderContainer>
  )
}
