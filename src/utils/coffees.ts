import american from '../assets/american.png'
import arabic from '../assets/arabic.png'
import cappuccino from '../assets/cappuccino.png'
import creamyEspresso from '../assets/creamy_espresso.png'
import cuban from '../assets/cuban.png'
import espresso from '../assets/espresso.png'
import hawaiian from '../assets/hawaiian.png'
import hotChocolate from '../assets/hot_chocolate.png'
import iceCoffee from '../assets/ice_coffee.png'
import irish from '../assets/irish.png'
import latte from '../assets/latte.png'
import macchiato from '../assets/macchiato.png'
import milkCoffee from '../assets/milk_coffee.png'
import mochaccino from '../assets/mochaccino.png'

export const COFFEES = [
  {
    id: 1,
    name: 'Traditional Espresso',
    description:
      'A traditional espresso coffee made with hot water and grounded coffee beans',
    categorie: ['Traditional'],
    img: espresso,
    price: 1,
  },
  {
    id: 2,
    name: 'American Espresso',
    description: 'Diluted espresso, less intense than the traditional',
    categorie: ['Traditional'],
    img: american,
    price: 1,
  },
  {
    id: 3,
    name: 'Creamy Espresso',
    description: 'Traditional espresso with cream foam',
    categorie: ['Traditional'],
    img: creamyEspresso,
    price: 1,
  },
  {
    id: 4,
    name: 'Ice Coffee',
    description: 'A drink made with espresso and ice cubes',
    categorie: ['Traditional', 'Cold'],
    img: iceCoffee,
    price: 1.5,
  },
  {
    id: 5,
    name: 'Milk Coffee',
    description: 'A drink made with half espresso and half milk',
    categorie: ['Traditional', 'With Milk'],
    img: milkCoffee,
    price: 1.5,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'One-third espresso, two-thirds heated milk, and about 1cm of foam',
    categorie: ['Traditional', 'With Milk'],
    img: latte,
    price: 1.5,
  },
  {
    id: 7,
    name: 'Cappuccino',
    description:
      'One-third espresso, one-third heated milk, one-third milk foam, and cinnamon',
    categorie: ['Traditional', 'With Milk'],
    img: cappuccino,
    price: 1.5,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Espresso-based coffee beverage consisting mostly of coffee with a small amount of milk',
    categorie: ['Traditional', 'With Milk'],
    img: macchiato,
    price: 1.5,
  },
  {
    id: 9,
    name: 'Mochaccino',
    description:
      'Coffee-based drink that is made with espresso, chocolate syrup, and steamed milk.',
    categorie: ['Traditional', 'With Milk'],
    img: mochaccino,
    price: 1.5,
  },
  {
    id: 10,
    name: 'Hot Chocolate',
    description: 'A drink made with chocolate powder, hot milk, and coffee',
    categorie: ['Special', 'With Milk'],
    img: hotChocolate,
    price: 2,
  },
  {
    id: 11,
    name: 'Cuban',
    description:
      'A cold drink made with espresso, rum, heavy cream, and peppermint',
    categorie: ['Special', 'Alcoholic', 'Cold'],
    img: cuban,
    price: 2.5,
  },
  {
    id: 12,
    name: 'Hawaiian',
    description: 'A sweet drink made with coffee and coconut milk',
    categorie: ['Special'],
    img: hawaiian,
    price: 2,
  },
  {
    id: 13,
    name: 'Arabic',
    description: 'A version of the brewed coffee of Coffea arabica beans',
    categorie: ['Special'],
    img: arabic,
    price: 2,
  },
  {
    id: 14,
    name: 'Irish',
    description: 'A caffeinated alcoholic drink topped with cream',
    categorie: ['Special', 'Alcoholic'],
    img: irish,
    price: 2.5,
  },
]
