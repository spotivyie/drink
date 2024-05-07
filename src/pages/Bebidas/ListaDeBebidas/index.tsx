import DrinkCard, { Menu } from "../../Home/components/DrinkCard"
import { Container } from "./styles"

export type Props = {
    menu: Menu[]
}

export const ListaDeBebidas = ({ menu }: Props) => {

    return(
        <Container>
            {menu.map((bebidas) => (
                <DrinkCard 
                    key={bebidas.id} 
                    drinks={bebidas} 
                />
            ))}
        </Container>
    )
}

export default ListaDeBebidas
