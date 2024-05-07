import Category from "../../components/Category"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Intro } from "./components/Intro"
import { OurDrinks } from "./components/OurDrinks"
import { Vendidos } from "./components/Vendidos"
import { HomeContainer } from "./styles"

export function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <Category />
      <Intro />

      <OurDrinks />
      <Vendidos />
      <Footer />
    </HomeContainer>
  )
}
