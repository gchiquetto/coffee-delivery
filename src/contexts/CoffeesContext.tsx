import { createContext, ReactNode, useEffect, useState } from 'react'
import { COFFEES } from '../utils/coffees'

interface CoffeesContextProviderProps {
  children: ReactNode
}

export interface CoffeeData {
  id: number
  name: string
  description: string
  categorie: string[]
  img: string
  price: number
}

export interface SelectedCoffee {
  id: number
  name: string
  img: string
  price: number
  quantity: number
}

interface CoffeesContextType {
  COFFEES: CoffeeData[]
  selectedCoffees: SelectedCoffee[]
  updateSelectedCoffees: (selectedCoffee: SelectedCoffee) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [selectedCoffees, setSelectedCoffes] = useState<SelectedCoffee[]>([])

  // Check only on the first render if there is data on localStorage, if so, setSelectedCoffees
  useEffect(() => {
    const storedStateJSON = localStorage.getItem(
      '@coffee-delivery:coffees-selected-1.0.0',
    )
    if (storedStateJSON) {
      console.log(storedStateJSON)
      const selectedCoffesStored = JSON.parse(storedStateJSON)
      return setSelectedCoffes([...selectedCoffesStored])
    } else {
      setSelectedCoffes([])
    }
  }, [])

  console.log(selectedCoffees)
  useEffect(() => {
    if (selectedCoffees.length > 0) {
      const stateJSON = JSON.stringify(selectedCoffees)
      localStorage.setItem('@coffee-delivery:coffees-selected-1.0.0', stateJSON)
    }
  }, [selectedCoffees])

  function updateSelectedCoffees(selectedCoffee: SelectedCoffee) {
    if (selectedCoffees.length > 0) {
      const doesSelectedCoffeeAlreadyExists = selectedCoffees.find(
        (e) => e.id === selectedCoffee.id,
      )
      if (doesSelectedCoffeeAlreadyExists) {
        const notChangedSelectedCoffees = selectedCoffees.filter(
          (coffee) => coffee.id !== selectedCoffee.id,
        )
        const newCoffee = {
          id: selectedCoffee.id,
          name: selectedCoffee.name,
          img: selectedCoffee.img,
          price: selectedCoffee.price,
          quantity:
            selectedCoffee.quantity + doesSelectedCoffeeAlreadyExists.quantity,
        }
        setSelectedCoffes([...notChangedSelectedCoffees, newCoffee])
      } else {
        setSelectedCoffes((state) => [...state, selectedCoffee])
      }
    } else {
      setSelectedCoffes((state) => [...state, selectedCoffee])
    }
  }

  return (
    <CoffeesContext.Provider
      value={{ COFFEES, selectedCoffees, updateSelectedCoffees }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
