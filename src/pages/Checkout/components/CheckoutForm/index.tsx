import {
  CheckoutFormAddressContainer,
  CheckoutFormContainerContent,
  CheckoutFormData,
  CheckoutFormPaymentContainer,
  CheckoutInformationCard,
  PaymentOptionsContainer,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

export function CheckoutForm() {
  const { register } = useFormContext()

  return (
    <CheckoutFormContainerContent>
      <CheckoutFormAddressContainer>
        <CheckoutInformationCard>
          <MapPinLine size={22} color="#C47F17" />
          <div>
            <h3>Delivery Address</h3>
            <p>Inform the address you want to receive your order</p>
          </div>
        </CheckoutInformationCard>
        <CheckoutFormData>
          <input
            type="text"
            className="input_md"
            id="postcode"
            placeholder="Postcode"
            {...register('postcode')}
          />
          <input
            type="text"
            className="input_1f"
            id="streetName"
            placeholder="Street name"
            {...register('streetName')}
          />
          <div>
            <input
              type="number"
              className="input_md"
              id="number"
              placeholder="Address Number"
              {...register('number', { valueAsNumber: true })}
            />
            <input
              type="text"
              className="input_1f"
              id="complement"
              placeholder="Address Complement(optional)"
              {...register('complement')}
            />
          </div>
          <div>
            <input
              type="text"
              className="input_md"
              id="district"
              placeholder="District"
              {...register('district')}
            />
            <input
              type="text"
              className="input_1f"
              id="city"
              placeholder="City"
              {...register('city')}
            />
            <input
              type="text"
              className="input_sm"
              id="state"
              placeholder="State"
              max={2}
              {...register('state')}
            />
          </div>
        </CheckoutFormData>
      </CheckoutFormAddressContainer>
      <CheckoutFormPaymentContainer>
        <CheckoutInformationCard>
          <CurrencyDollar size={22} color="#8047F8" />
          <div>
            <h3>Payment</h3>
            <p>
              The payment is made on delivery. Please choose your payment method
            </p>
          </div>
        </CheckoutInformationCard>

        <PaymentOptionsContainer>
          <input
            type="radio"
            id="credit_card"
            value="Credit Card"
            {...register('payment')}
          />
          <label htmlFor="credit_card">
            <CreditCard size={16} />
            Credit Card
          </label>
          <input
            type="radio"
            id="debit_card"
            value="Debit Card"
            {...register('payment')}
          />
          <label htmlFor="debit_card">
            <Bank size={16} />
            Debit Card
          </label>
          <input
            type="radio"
            id="money"
            value="Money"
            {...register('payment')}
          />
          <label htmlFor="money">
            <Money size={16} />
            Money
          </label>
        </PaymentOptionsContainer>
      </CheckoutFormPaymentContainer>
    </CheckoutFormContainerContent>
  )
}
