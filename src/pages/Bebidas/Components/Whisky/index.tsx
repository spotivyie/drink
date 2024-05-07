import { useEffect, useState } from "react"

import * as S from './styles'

import ListaDeBebidas from "../../ListaDeBebidas"
import Category from "../../../../components/Category"

import { Menu } from "../../../Home/components/DrinkCard"
import { Header } from "../../../../components/Header"
import { Footer } from "../../../../components/Footer"

const Whisky = () => {
    const [bebidas, setBebidas] = useState<Menu[]>([])

    useEffect(() => {
        fetch('https://api-phi-one-85.vercel.app/whisky')
        .then((res) => res.json())
        .then((res) => setBebidas(res))
    }, [])

    return (
        <>
        <Header />
        <Category />
            <S.Whisky>
                <ListaDeBebidas menu={bebidas} />
            </S.Whisky>
        <Footer />
        </>
    )
}

export default Whisky
