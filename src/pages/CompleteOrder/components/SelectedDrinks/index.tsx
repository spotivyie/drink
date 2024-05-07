import { useCart } from "../../../../hooks/useCart"
import { TitleText } from "../../../../components/Typography"
import { DrinkCartCard } from "../DrinkCartCard"
import { ConfirmationSection } from "./ConfirmationSection"
import * as S from './styles'

export function SelectedDrinks() {
  const { cartItems } = useCart();

  return (
    <S.SelectedDrinksContainer>
      <TitleText size="xs" color="subtitle">
        Bebidas selecionados
      </TitleText>

      <S.DetailsContainer>
        {cartItems.map((item) => (
          <DrinkCartCard key={item.id} drink={item} />
        ))}

        <ConfirmationSection />
      </S.DetailsContainer>
    </S.SelectedDrinksContainer>
  )
}
