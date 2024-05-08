import { QuantityInput } from "../../../../components/QuantityInput"
import { RegularText } from "../../../../components/Typography"
import * as S from './styles'
import { Trash } from "phosphor-react"
import { CartItem } from "../../../../contexts/CartContext"
import { useCart } from "../../../../hooks/useCart"
import { formatMoney } from "../../../../utils/formatMoney"

interface DrinkCartCardProps {
  drink: CartItem
}

export function DrinkCartCard({ drink }: DrinkCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(drink.id, "increase")
  }

  function handleDecrease() {
    changeCartItemQuantity(drink.id, "decrease")
  }

  function handleRemove() {
    removeCartItem(drink.id)
  }

  const drinkTotal = drink.price * drink.quantity

  const formattedPrice = formatMoney(drinkTotal)

  return (
    <S.DrinkCartCardContainer>
      <div>
        <img src={drink.image} />
        <div>
          <RegularText color="subtitle">{drink.name}</RegularText>
          <S.ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={drink.quantity}
              size="small"
            />
            <S.RemoveButton type="button" onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </S.RemoveButton>
          </S.ActionsContainer>
        </div>
      </div>

      <p>R${formattedPrice}</p>
    </S.DrinkCartCardContainer>
  )
}
