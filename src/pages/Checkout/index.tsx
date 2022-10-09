import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { CheckoutCoffeeCard } from './components/CheckoutCoffeeCard'
import { CheckoutForm } from './components/CheckoutForm'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  CheckoutButton,
  CheckoutContainer,
  CheckoutFormContainer,
  CheckoutSummary,
  CheckoutSummaryContainer,
  CheckoutSummaryContent,
} from './styles'

const CheckoutValidationSchema = zod.object({
  postcode: zod.string().min(1, 'Please enter with your postcode'),
  streetName: zod.string().min(1, 'Please enter with your street name'),
  number: zod.number(),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string().min(1, 'Please enter with your city name'),
  state: zod.string().max(2),
  payment: zod.string().min(1),
})

type AddressFormData = zod.infer<typeof CheckoutValidationSchema>

export function Checkout() {
  const { selectedCoffees, setAddressData, formatValue } =
    useContext(CoffeesContext)
  const valuesArray = selectedCoffees.map(
    (coffee) => coffee.price * coffee.quantity,
  )
  const totalItems = valuesArray.reduce((prev, curr) => prev + curr, 0)
  const formattedPrice = formatValue(totalItems)
  const formattedTotal = totalItems > 0 ? formatValue(totalItems + 1) : '0.00'
  const disabledButton = !(selectedCoffees.length > 0)

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(CheckoutValidationSchema),
    defaultValues: {
      postcode: '',
      streetName: '',
      number: 0,
      complement: '',
      district: '',
      city: '',
      state: '',
      payment: '',
    },
  })

  const { handleSubmit, reset } = addressForm

  function handleSubmitData(data: AddressFormData) {
    setAddressData(data)
    reset()
  }

  return (
    <CheckoutContainer>
      <form action="/success" onSubmit={handleSubmit(handleSubmitData)}>
        <CheckoutFormContainer>
          <strong>Complete your order</strong>
          <FormProvider {...addressForm}>
            <CheckoutForm />
          </FormProvider>
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
            <CheckoutButton type="submit" disabled={disabledButton}>
              Order
            </CheckoutButton>
          </CheckoutSummaryContainer>
        </CheckoutSummary>
      </form>
    </CheckoutContainer>
  )
}
