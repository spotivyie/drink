import { createContext, ReactNode, useEffect, useState } from "react"
import { Menu } from "../pages/Home/components/DrinkCard"
import { produce } from "immer"

export interface CartItem extends Menu {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addDrinkToCart: (drink: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void
  removeCartItem: (cartItemId: number) => void
  cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const DRINKS_ITEMS_STORAGE_KEY = "drinksDelivery:cartItems"

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(DRINKS_ITEMS_STORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addDrinkToCart(drink: CartItem) {
    const drinkAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === drink.id
    )

    const newCart = produce(cartItems, (draft) => {
      if (drinkAlreadyExistsInCart < 0) {
        draft.push(drink);
      } else {
        draft[drinkAlreadyExistsInCart].quantity += drink.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const drinkExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      )

      if (drinkExistsInCart >= 0) {
        const item = draft[drinkExistsInCart];
        draft[drinkExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const drinkExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      )

      if (drinkExistsInCart >= 0) {
        draft.splice(drinkExistsInCart, 1);
      }
    })

    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(DRINKS_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addDrinkToCart,
        cartQuantity,
        changeCartItemQuantity,
        removeCartItem,
        cartItemsTotal,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
