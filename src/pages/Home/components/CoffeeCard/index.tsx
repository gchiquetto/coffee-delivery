import { ShoppingCart, Minus, Plus } from 'phosphor-react'
import { useContext, useState } from 'react'
import {
  CoffeeData,
  CoffeesContext,
  SelectedCoffee,
} from '../../../../contexts/CoffeesContext'
import {
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeTypesContainer,
} from './styles'

interface CoffeeProps {
  data: CoffeeData
  // updateSelectedCoffees: (selectedCoffee: SelectedCoffee) => void
}

export function CoffeeCard({ data }: CoffeeProps) {
  const { updateSelectedCoffees } = useContext(CoffeesContext)
  const [quantityCoffe, setquantityCoffe] = useState(0)
  const disabledButton = !(quantityCoffe > 0)

  function handleQuantity(operation: 'sum' | 'subtraction') {
    setquantityCoffe((state) => {
      if (operation === 'subtraction') {
        return state > 0 ? state - 1 : 0
      }
      return state + 1
    })
  }

  function handleSelectedCoffe() {
    const selectedCoffee = {
      id: data.id,
      name: data.name,
      img: data.img,
      price: data.price,
      quantity: quantityCoffe,
    }
    updateSelectedCoffees(selectedCoffee)
  }

  const formattedPrice = Number.isInteger(data.price)
    ? data.price.toString() + '.00'
    : data.price.toString().padEnd(4, '0')

  return (
    <CoffeeCardContainer>
      <img src={data.img} alt="Cup of traditional espresso" />
      <div className="category_container">
        {data.categorie.map((category, index) => {
          return (
            <CoffeeTypesContainer key={index}>
              <span>{category}</span>
            </CoffeeTypesContainer>
          )
        })}
      </div>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <CoffeeCardFooter>
        <div className="price-tag">
          € <span>{formattedPrice}</span>
        </div>
        <div className="quantity-cart_container">
          <div className="quantity-box">
            <button onClick={() => handleQuantity('subtraction')}>
              <Minus />
            </button>
            <span>{quantityCoffe}</span>
            <button onClick={() => handleQuantity('sum')}>
              <Plus />
            </button>
          </div>
          <button
            onClick={handleSelectedCoffe}
            disabled={disabledButton}
            className="shopping-cart"
          >
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
