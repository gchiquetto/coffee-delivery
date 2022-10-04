import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeBanner from '../../assets/coffee-banner.svg'
import { CoffeeCard } from './components/CoffeeCard'
import {
  BannerContent,
  BannerFeatures,
  HomeBanner,
  HomeContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeBanner>
        <BannerContent>
          <h1>Find the perfect coffee for any time of the day</h1>
          <h2>
            With Coffee Delivery you will receive your favorite coffee anywhere,
            and anytime
          </h2>
          <BannerFeatures>
            <span>
              <div className="shopping">
                <ShoppingCart weight="fill" />
              </div>
              Purchase simple and secure
            </span>
            <span>
              <div className="package">
                <Package weight="fill" />
              </div>
              Perfectly packaged
            </span>
            <span>
              <div className="timer">
                <Timer weight="fill" />
              </div>
              Fast and trackable delivery
            </span>
            <span>
              <div className="coffee">
                <Coffee weight="fill" />
              </div>
              Your coffee will arrive fresh
            </span>
          </BannerFeatures>
        </BannerContent>
        <img
          src={coffeBanner}
          alt="Cup of coffee with a yellow background with coffee beans, leaves, and coffee powder"
        />
      </HomeBanner>
      <div>
        <strong>Our coffee</strong>
        <div>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </div>
    </HomeContainer>
  )
}
