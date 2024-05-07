import { DrinkCard, Menu } from "../DrinkCard"
import { DrinkList } from "./styles"

export type Props = {
        menu: Menu[]
    }

export const Product = ({ menu }: Props) => {


    return (
    <DrinkList>
        {menu.map((bebidas) => (
                <DrinkCard 
                    key={bebidas.id} 
                    drinks={bebidas} 
                />
            ))}
    </DrinkList>
    )
}
