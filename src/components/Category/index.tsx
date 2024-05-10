import { NavLink } from 'react-router-dom'
import * as S from './styles'
import { useState } from 'react'

const Category = () => {
    const [isCategoryOpen, setCategoryOpen] = useState(false)

    return (
    <S.CategoryBar>
        <S.Flex onClick={() => setCategoryOpen(!isCategoryOpen)}>
            <S.Category>
                <span />
                <span />
                <span />
            </S.Category>
            <p>Todas as categorias</p>
        </S.Flex>
        <S.Drinks>
            <S.Bebidas>
                <NavLink to="/whisky">
                    <p>Whisky</p>
                </NavLink>
            </S.Bebidas>
            <S.Bebidas>
                <NavLink to="/vodka">
                    <p>Vodka</p>
                </NavLink>
            </S.Bebidas>
            <S.Bebidas >
                <NavLink to="/gin">
                    <p>Gin</p>
                </NavLink>
            </S.Bebidas>
            <S.Bebidas>
                <NavLink to="/licor">
                    <p>Licor</p>
                </NavLink>
            </S.Bebidas>
            <S.Bebidas>
                <NavLink to="/vinho">
                    <p>Vinho</p>
                </NavLink>
            </S.Bebidas>
            <S.Bebidas>
                <NavLink to="/cervejas">
                    <p>Cervejas</p>
                </NavLink>
            </S.Bebidas>
        </S.Drinks>
        <S.NavMobile className={isCategoryOpen ? 'is-open' : ''}>
            <S.Bebidas onClick={() => setCategoryOpen(false)}>
                <NavLink to="/whisky">
                    <p>Whisky</p>
                </NavLink>
            </S.Bebidas>
            <S.Bebidas onClick={() => setCategoryOpen(false)}>
                <NavLink to="/vodka">
                    <p>Vodka</p>
                </NavLink>
            </S.Bebidas>
            <S.Bebidas onClick={() => setCategoryOpen(false)}>
                <NavLink to="/gin">
                    <p>Gin</p>
                </NavLink>
            </S.Bebidas>
            <S.Bebidas onClick={() => setCategoryOpen(false)}>
                <NavLink to="/licor">
                    <p>Licor</p>
                </NavLink>
            </S.Bebidas>
            <S.Bebidas onClick={() => setCategoryOpen(false)}>
                <NavLink to="/vinho">
                    <p>Vinho</p>
                </NavLink>
            </S.Bebidas>
            <S.Bebidas onClick={() => setCategoryOpen(false)}>
                <NavLink to="/cervejas">
                    <p>Cervejas</p>
                </NavLink>
            </S.Bebidas>
        </S.NavMobile>
    </S.CategoryBar>
    )
}

export default Category
