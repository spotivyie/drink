import { useEffect, useState } from "react"
import { Product } from "../Product"
import { DrinkList, OurDrinksContainer, VendidosBar } from "./styles"
import { Menu } from "../DrinkCard"

export function OurDrinks() {
  const [bebidas, setBebidas] = useState<Menu[]>([])

  useEffect(() => {
    fetch('https://api-phi-one-85.vercel.app/bebidas')
    .then((res) => res.json())
    .then((res) => setBebidas(res))
  }, [])

  return (
    <OurDrinksContainer>
      <VendidosBar>
        <h3>
          Nossas bebidas
        </h3>

        <DrinkList>
          <Product menu={bebidas} />
        </DrinkList>
      </VendidosBar>
    </OurDrinksContainer>
  )
}


