import {
  CheckoutFormAddressContainer,
  CheckoutFormContainerContent,
  CheckoutFormData,
  CheckoutFormPaymentContainer,
  CheckoutInformationCard,
  PaymentOption,
  PaymentOptionsContainer,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

export function CheckoutForm() {
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
          />
          <input
            type="text"
            className="input_1f"
            id="address"
            placeholder="Street name"
          />
          <div>
            <input
              type="number"
              className="input_md"
              id="number"
              placeholder="Address Number"
            />
            <input
              type="text"
              className="input_1f"
              id="complement"
              placeholder="Address Complement(optional)"
            />
          </div>
          <div>
            <input
              type="text"
              className="input_md"
              id="district"
              placeholder="District"
            />
            <input
              type="text"
              className="input_1f"
              id="city"
              placeholder="City"
            />
            <input
              type="text"
              className="input_sm"
              id="state"
              placeholder="State"
              max={2}
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
            name="payments"
            value="credit_card"
          />
          <label htmlFor="credit_card">
            <CreditCard size={16} />
            Credit Card
          </label>
          <input
            type="radio"
            id="debit_card"
            name="payments"
            value="debit_card"
          />
          <label htmlFor="debit_card">
            <Bank size={16} />
            Debit Card
          </label>
          <input type="radio" id="money" name="payments" value="money" />
          <label htmlFor="money">
            <Money size={16} />
            Money
          </label>
        </PaymentOptionsContainer>
      </CheckoutFormPaymentContainer>
    </CheckoutFormContainerContent>
  )
}
