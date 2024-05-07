import * as S from './styles'
import { ShoppingCart, UserCircle } from "phosphor-react"
import { NavLink, useNavigate } from "react-router-dom"
import { useCart } from "../../hooks/useCart"

export function Header() {
  const { cartQuantity } = useCart()

  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <S.HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <h1>LOGO</h1>
        </NavLink>

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
