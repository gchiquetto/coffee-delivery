import { CheckoutCoffeeCard } from './components/CheckoutCoffeeCard'
import {
  CheckoutButton,
  CheckoutContainer,
  CheckoutFormContainer,
  CheckoutSummary,
  CheckoutSummaryContainer,
  CheckoutSummaryContent,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form action="">
        <CheckoutFormContainer>
          <strong>Complete your order</strong>
        </CheckoutFormContainer>
        <CheckoutSummary>
          <strong>Selected coffees</strong>
          <CheckoutSummaryContainer>
            <CheckoutCoffeeCard />
            <CheckoutCoffeeCard />
            <CheckoutSummaryContent>
              <div>
                <p>Total of items</p>
                <p>€ 2.00</p>
              </div>
              <div>
                <p>Delivery</p>
                <p>€ 1.00</p>
              </div>
              <div>
                <p>Total</p>
                <p>€ 3.00</p>
              </div>
            </CheckoutSummaryContent>
            <CheckoutButton type="submit">Order</CheckoutButton>
          </CheckoutSummaryContainer>
        </CheckoutSummary>
      </form>
    </CheckoutContainer>
  )
}
