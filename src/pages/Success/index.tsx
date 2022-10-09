import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import checkoutIllustration from '../../assets/checkout-illustration.png'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import {
  DeliveryTimeInformation,
  LocalInformation,
  OrderInformationContainer,
  PaymentInformation,
  SuccessContainer,
  SuccessContent,
} from './styles'

export function Success() {
  const { address } = useContext(CoffeesContext)

  return (
    <SuccessContainer>
      <SuccessContent>
        <div>
          <h2>Yay! Order is confirmed</h2>
          <p>Now you just need to wait, soon the order will be with you</p>
        </div>
        <div className="gradient_border-wrapper">
          <OrderInformationContainer>
            <LocalInformation>
              <div className="address">
                <MapPin weight="fill" />
              </div>
              <div>
                <p>
                  Delivery on{' '}
                  <strong>
                    {address.streetName}, {address.number}
                  </strong>
                </p>
                <span>{address.city}</span>
              </div>
            </LocalInformation>
            <DeliveryTimeInformation>
              <div>
                <Timer weight="fill" />
              </div>
              <div>
                <p>Expected delivery</p>
                <strong>20 - 30 minutes</strong>
              </div>
            </DeliveryTimeInformation>
            <PaymentInformation>
              <div className="address">
                <CurrencyDollar weight="fill" />
              </div>
              <div>
                <p>Payment on delivery</p>
                <strong>{address.payment}</strong>
              </div>
            </PaymentInformation>
          </OrderInformationContainer>
        </div>
      </SuccessContent>
      <img
        src={checkoutIllustration}
        alt="A delivery man in a purple motorbike bringing a box with a coffee logo"
      />
    </SuccessContainer>
  )
}
