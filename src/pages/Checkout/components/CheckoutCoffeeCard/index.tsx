import { Trash, Minus, Plus } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import {
  BoxDefault,
  CheckoutCardCTA,
  CheckoutCardData,
  CheckoutCoffeeCardContainer,
  QuantityBox,
} from './styles'

interface SelectedCoffeeData {
  data: {
    id: number
    name: string
    img: string
    price: number
    quantity: number
  }
}

export function CheckoutCoffeeCard({ data }: SelectedCoffeeData) {
  const { updateSelectedCoffees, deleteSelectedCoffee, formatValue } =
    useContext(CoffeesContext)
  const [quantity, setQuantity] = useState(data.quantity)

  function handleQuantity(operation: 'sum' | 'subtraction') {
    setQuantity((state) => {
      if (operation === 'subtraction') {
        return state > 0 ? state - 1 : 0
      }
      return state + 1
    })
  }

  function handleDeleteCoffee() {
    deleteSelectedCoffee(data)
  }

  useEffect(() => {
    const selectedCoffee = {
      id: data.id,
      name: data.name,
      img: data.img,
      price: data.price,
      quantity,
    }
    quantity === 0
      ? deleteSelectedCoffee(selectedCoffee)
      : updateSelectedCoffees(selectedCoffee, 'update')
  }, [quantity])

  const totalValueOfItem = data.price * quantity
  const formattedPrice = formatValue(totalValueOfItem)

  return (
    <CheckoutCoffeeCardContainer>
      <img src={data.img} alt={`Cup of ${data.name}`} />
      <CheckoutCardData>
        <p>{data.name}</p>
        <CheckoutCardCTA>
          <QuantityBox>
            <div onClick={() => handleQuantity('subtraction')}>
              <Minus />
            </div>
            <span>{quantity}</span>
            <div onClick={() => handleQuantity('sum')}>
              <Plus />
            </div>
          </QuantityBox>
          <BoxDefault onClick={handleDeleteCoffee}>
            <Trash />
            Delete
          </BoxDefault>
        </CheckoutCardCTA>
      </CheckoutCardData>
      <span className="item-value">€ {formattedPrice}</span>
    </CheckoutCoffeeCardContainer>
  )
}
