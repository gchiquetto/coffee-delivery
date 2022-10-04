import { ShoppingCart, Minus, Plus } from 'phosphor-react'
import coffeeEspresso from '../../../../assets/coffee-espresso.png'
import {
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeTypesContainer,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffeeEspresso} alt="Cup of traditional espresso" />
      <CoffeeTypesContainer>
        <span>Traditional</span>
      </CoffeeTypesContainer>
      <h3>Traditional espresso</h3>
      <p>
        A traditional espresso coffee made with hot water and grounded coffee
        beans
      </p>
      <CoffeeCardFooter>
        <div className="price-tag">
          € <span>2.00</span>
        </div>
        <div className="quantity-cart_container">
          <div className="quantity-box">
            <button>
              <Minus />
            </button>
            <span>1</span>
            <button>
              <Plus />
            </button>
          </div>
          <button className="shopping-cart">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
