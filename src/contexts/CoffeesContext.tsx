import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

export interface Address {
  postcode: string
  streetName: string
  number: number
  complement: string
  district: string
  city: string
  state: string
  payment: string
}

interface CoffeesContextType {
  COFFEES: CoffeeData[]
  selectedCoffees: SelectedCoffee[]
  address: Address
  updateSelectedCoffees: (
    selectedCoffee: SelectedCoffee,
    operation: 'add' | 'update',
  ) => void
  deleteSelectedCoffee: (selectedCoffee: SelectedCoffee) => void
  setAddressData: (addressData: Address) => void
  formatValue: (price: number) => string
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [selectedCoffees, setSelectedCoffes] = useState<SelectedCoffee[]>([])
  const [address, setAddress] = useState({} as Address)
  const navigate = useNavigate()

  // Check only on the first render if there is data on localStorage, if so, setSelectedCoffees
  useEffect(() => {
    const storedStateJSON = localStorage.getItem(
      '@coffee-delivery:coffees-selected-1.0.0',
    )
    if (storedStateJSON) {
      const selectedCoffesStored = JSON.parse(storedStateJSON)
      return setSelectedCoffes([...selectedCoffesStored])
    } else {
      setSelectedCoffes([])
    }
  }, [])

  useEffect(() => {
    if (selectedCoffees.length > 0) {
      const stateJSON = JSON.stringify(selectedCoffees)
      localStorage.setItem('@coffee-delivery:coffees-selected-1.0.0', stateJSON)
    }
  }, [selectedCoffees])

  function updateSelectedCoffees(
    selectedCoffee: SelectedCoffee,
    operation: 'add' | 'update',
  ) {
    if (selectedCoffees.length > 0) {
      const doesSelectedCoffeeAlreadyExists = selectedCoffees.find(
        (e) => e.id === selectedCoffee.id,
      )
      if (doesSelectedCoffeeAlreadyExists) {
        const notChangedSelectedCoffees = selectedCoffees.filter(
          (coffee) => coffee.id !== selectedCoffee.id,
        )
        const newQuantity =
          operation === 'update'
            ? selectedCoffee.quantity
            : selectedCoffee.quantity + doesSelectedCoffeeAlreadyExists.quantity

        const newCoffee = {
          id: selectedCoffee.id,
          name: selectedCoffee.name,
          img: selectedCoffee.img,
          price: selectedCoffee.price,
          quantity: newQuantity,
        }
        setSelectedCoffes([...notChangedSelectedCoffees, newCoffee])
      } else {
        setSelectedCoffes((state) => [...state, selectedCoffee])
      }
    } else {
      setSelectedCoffes([selectedCoffee])
    }
  }

  function deleteSelectedCoffee(selectedCoffee: SelectedCoffee) {
    const notChangedSelectedCoffees = selectedCoffees.filter(
      (coffee) => coffee.id !== selectedCoffee.id,
    )
    notChangedSelectedCoffees.length === 0 &&
      localStorage.removeItem('@coffee-delivery:coffees-selected-1.0.0')
    setSelectedCoffes([...notChangedSelectedCoffees])
  }

  function setAddressData(addressData: Address) {
    setAddress(addressData)
    navigate('/success')
    setSelectedCoffes([])
    localStorage.removeItem('@coffee-delivery:coffees-selected-1.0.0')
  }

  function formatValue(price: number) {
    return Number.isInteger(price)
      ? price.toString() + '.00'
      : price > 10
      ? price.toString().padEnd(5, '0')
      : price.toString().padEnd(4, '0')
  }

  return (
    <CoffeesContext.Provider
      value={{
        COFFEES,
        selectedCoffees,
        address,
        updateSelectedCoffees,
        deleteSelectedCoffee,
        setAddressData,
        formatValue,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
