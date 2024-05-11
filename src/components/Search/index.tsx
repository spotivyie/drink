import * as S from './styles'

import { useState } from "react"
import { Menu } from "../../pages/Home/components/DrinkCard"

export type Props = {
    menu: Menu[]
}

export const Search = ({ menu }: Props) => {
    const [busca, setBusca] = useState('')
    const lowerBusca = busca.toLowerCase()

    const itensFiltrados = menu.filter((drinks) => drinks.name.toLowerCase().includes(lowerBusca))

    return (
        <S.Search>
            <S.Input 
                placeholder="Pesquise sua bebida aqui"
                type="text" 
                value={busca}
                onChange={(ev) => setBusca(ev.target.value)}
            />
            {busca.length > 0 ? (
                <S.Itens >
                {itensFiltrados.map((drinks) => (
                    <li 
                    key={drinks.id}>
                        {drinks.name}
                    </li>
                ))}
                </S.Itens>
            ) : []}
        </S.Search>
    )
}
