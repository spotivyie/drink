import * as S from './styles'
import { ShoppingCart, UserCircle } from "phosphor-react"
import { NavLink, useNavigate } from "react-router-dom"
import { useCart } from "../../hooks/useCart"
import { useEffect, useState } from 'react'
import { Menu } from '../../pages/Home/components/DrinkCard'
import { Search } from '../Search'

export const Header = () => {
  const { cartQuantity } = useCart()
  const [bebidas, setBebidas] = useState<Menu[]>([])

  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login')
  }

  useEffect(() => {
    fetch('https://api-phi-one-85.vercel.app/whisky')
    .then((res) => res.json())
    .then((res) => setBebidas(res))
  }, [])

  return (
    <S.HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <h1>LOGO</h1>
        </NavLink>

        <Search menu={bebidas} />

        <S.HeaderButtonsContainer>
          <S.Login onClick={goToLogin}>
            <UserCircle size={24}  />
            <p>
              Minha Conta
            </p>
          </S.Login>
          
          <NavLink to="/completeOrder">
            <S.HeaderButton>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </S.HeaderButton>
          </NavLink>
        </S.HeaderButtonsContainer>
      </div>
    </S.HeaderContainer>
  )
}
