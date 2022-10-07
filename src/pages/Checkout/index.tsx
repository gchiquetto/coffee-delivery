import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { CheckoutCoffeeCard } from './components/CheckoutCoffeeCard'
import { CheckoutForm } from './components/CheckoutForm'

import {
  CheckoutButton,
  CheckoutContainer,
  CheckoutFormContainer,
  CheckoutSummary,
  CheckoutSummaryContainer,
  CheckoutSummaryContent,
} from './styles'

export function Checkout() {
  const { selectedCoffees, formatValue } = useContext(CoffeesContext)
  const valuesArray = selectedCoffees.map(
    (coffee) => coffee.price * coffee.quantity,
  )
  const totalItems = valuesArray.reduce((prev, curr) => prev + curr, 0)
  const formattedPrice = formatValue(totalItems)
  const formattedTotal = totalItems > 0 ? formatValue(totalItems + 1) : '0.00'

  return (
    <CheckoutContainer>
      <form action="">
        <CheckoutFormContainer>
          <strong>Complete your order</strong>
          <CheckoutForm />
        </CheckoutFormContainer>
        <CheckoutSummary>
          <strong>Selected coffees</strong>
          <CheckoutSummaryContainer>
            {selectedCoffees.map((coffee) => {
              return <CheckoutCoffeeCard data={coffee} key={coffee.id} />
            })}
            <CheckoutSummaryContent>
              <div>
                <p>Total of items</p>
                <p>€ {formattedPrice}</p>
              </div>
              <div>
                <p>Delivery</p>
                <p>€ {totalItems > 0 ? '1.00' : '0.00'}</p>
              </div>
              <div>
                <p>Total</p>
                <p>€ {formattedTotal}</p>
              </div>
            </CheckoutSummaryContent>
            <CheckoutButton type="submit">Order</CheckoutButton>
          </CheckoutSummaryContainer>
        </CheckoutSummary>
      </form>
    </CheckoutContainer>
  )
}
