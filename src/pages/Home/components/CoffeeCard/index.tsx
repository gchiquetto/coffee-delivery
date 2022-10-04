import { ShoppingCart } from 'phosphor-react'
import coffeeEspresso from '../../../../assets/coffee-espresso.png'

export function CoffeeCard() {
  return (
    <div>
      <img src={coffeeEspresso} alt="Cup of traditional espresso" />
      <div>
        <span>Traditional</span>
      </div>
      <h3>Traditional espresso</h3>
      <p>
        A traditional espresso coffee made with hot water and grounded coffee
        beans
      </p>
      <div>
        <span>€ 2.00</span>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </div>
  )
}
