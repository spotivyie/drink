import { useEffect, useState } from "react"

import * as S from './styles'
import { Header } from "../../../../components/Header"
import Category from "../../../../components/Category"
import { Footer } from "../../../../components/Footer"
import { Menu } from "../../../Home/components/DrinkCard"
import ListaDeBebidas from "../../ListaDeBebidas"

const Gin = () => {
    const [bebidas, setBebidas] = useState<Menu[]>([])

    useEffect(() => {
        fetch('https://api-phi-one-85.vercel.app/gin')
        .then((res) => res.json())
        .then((res) => setBebidas(res))
    }, [])

    return (
        <>
        <Header />
        <Category />
            <S.Gin>
                <ListaDeBebidas menu={bebidas} />
            </S.Gin>
        <Footer />
        </>
    )
}

export default Gin
