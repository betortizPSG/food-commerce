import { createContext, ReactNode, useEffect, useState } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { toast } from 'react-toastify'
import { snackEmoji } from '../helpers/SnackEmoji'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface UpdateCartProps {
  id: number
  snack: string
  newQuantity: number
}

interface removeSnackFromCartProps {
  id: number
  snack: string
}

interface CardContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  // updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void
  // removeSnackFromCart: ({ id, snack }: removeSnackFromCartProps) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CardContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData): void {
    // verifica se o item já existe no carrinho (buscar pelo id)
    const snackExistentInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === snack.id, // se não encontrar, retorna undefined
    )

    // se existir, atualiza a quantidade e o subtotal
    if (snackExistentInCart) {
      const newCart = cart.map((item) =>
        item.id === snack.id
          ? {
              ...snack,
              quantity: item.quantity + 1,
              subtotal: (item.quantity + 1) * snack.price,
            }
          : item,
      )

      console.log(`newCart atualiza ${snack.name} ${snack.name}}`, newCart)
      toast.success(`${snackEmoji(snack.snack)} Carrinho atualizado!`)
      setCart(newCart)
      return // para a execução da função
    }

    // se não existir, adiciona o item no carrinho

    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack] // adiciona o novo item no carrinho (push)

    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado ao carrinho!`)
    console.log(`newCart ${snack.name}`, newCart)

    setCart(newCart)
  }

  return <CartContext.Provider value={{ cart, addSnackIntoCart }}>{children}</CartContext.Provider>
}
