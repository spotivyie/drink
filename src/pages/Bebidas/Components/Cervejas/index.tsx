import { useEffect, useState } from "react"

import * as S from './styles'
import { Header } from "../../../../components/Header"
import Category from "../../../../components/Category"
import { Footer } from "../../../../components/Footer"
import { Menu } from "../../../Home/components/DrinkCard"
import ListaDeBebidas from "../../ListaDeBebidas"

const Cervejas = () => {
    const [bebidas, setBebidas] = useState<Menu[]>([])

    useEffect(() => {
        fetch('https://api-phi-one-85.vercel.app/cervejas')
        .then((res) => res.json())
        .then((res) => setBebidas(res))
    }, [])

    return (
        <>
        <Header />
        <Category />
            <S.Cervejas>
            <ListaDeBebidas menu={bebidas} />
            </S.Cervejas>
        <Footer />
        </>
    )
}

export default Cervejas
