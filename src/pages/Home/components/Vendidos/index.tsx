import { useEffect, useState } from "react"
import { Menu } from "../DrinkCard"
import { Product } from "../Product"
import { DrinkList, OurDrinksContainer, VendidosBar } from "./styles"

export function Vendidos() {
    const [bebidas, setBebidas] = useState<Menu[]>([])

    useEffect(() => {
        fetch('https://api-phi-one-85.vercel.app/vendidos')
        .then((res) => res.json())
        .then((res) => setBebidas(res))
    }, [])

    return (
        <OurDrinksContainer>
            <VendidosBar>
                <h3>
                    Mais vendidos
                </h3>

                <DrinkList>
                    <Product menu={bebidas} />
                </DrinkList>
            </VendidosBar>
        </OurDrinksContainer>
    )
}
