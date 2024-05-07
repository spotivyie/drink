import { QuantityInput } from "../../../../components/QuantityInput"
import { RegularText } from "../../../../components/Typography"
import * as S from './styles'
import { useState } from "react";
import { useCart } from "../../../../hooks/useCart"
import { formatMoney } from "../../../../utils/formatMoney"

export interface Menu {
  id: number
  name: string
  image: string
  price: number
}

export interface DrinksProps {
  drinks: Menu
}

export const DrinkCard = ({ drinks }: DrinksProps) => {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  const { addDrinkToCart } = useCart()

  function handleAddToCart() {
    const drinkToAdd = {
      ...drinks,
      quantity,
    }
    addDrinkToCart(drinkToAdd)
  }

  const formattedPrice = formatMoney(drinks.price)

  return (
    <S.Card>
      <img src={drinks.image} />
      <S.Name>{drinks.name}</S.Name>

      <S.Descricao>
        <RegularText size="s">R$</RegularText>
        <p>
          {formattedPrice}
        </p>
      </S.Descricao>

      <S.AddCartWrapper>
        <QuantityInput
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
        />
        <S.Button onClick={handleAddToCart}>
          <h1>Comprar</h1>
        </S.Button>
      </S.AddCartWrapper>
    </S.Card>
  )
}

export default DrinkCard