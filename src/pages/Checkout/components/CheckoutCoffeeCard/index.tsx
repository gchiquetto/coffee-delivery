import { Trash, Minus, Plus } from 'phosphor-react'
import coffeeEspresso from '../../../../assets/coffee-espresso.png'
import {
  BoxDefault,
  CheckoutCardCTA,
  CheckoutCardData,
  CheckoutCoffeeCardContainer,
  QuantityBox,
} from './styles'

export function CheckoutCoffeeCard() {
  return (
    <CheckoutCoffeeCardContainer>
      <img src={coffeeEspresso} alt="Cup of traditional espresso" />
      <CheckoutCardData>
        <p>Traditional espresso</p>
        <CheckoutCardCTA>
          <QuantityBox>
            <button>
              <Minus />
            </button>
            <span>1</span>
            <button>
              <Plus />
            </button>
          </QuantityBox>
          <BoxDefault>
            <Trash />
            Delete
          </BoxDefault>
        </CheckoutCardCTA>
      </CheckoutCardData>
      <span className="item-value">€ 2.00</span>
    </CheckoutCoffeeCardContainer>
  )
}
