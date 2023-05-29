import { createContext, ReactNode, useState } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { toast } from 'react-toastify'
import { snackEmoji } from '../helpers/SnackEmoji'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface CardContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: ( snack: Snack ) => void
  snackCartIncrement: ( snack: Snack ) => void
  snackCartDecrement: ( snack: Snack ) => void
  confirmOrder: () => void
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

      toast.success(`${snackEmoji(snack.snack)} Carrinho atualizado!`)
      setCart(newCart)
      return // para a execução da função
    }

    // se não existir, adiciona o item no carrinho

    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack] // adiciona o novo item no carrinho (push)

    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado ao carrinho!`)
    setCart(newCart)
  }

  function removeSnackFromCart( snack: Snack ) {
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))
    setCart(newCart)
  }

  function snackCartIncrement( snack: Snack ) {
    updateCartQuantity( snack, snack.quantity + 1 )
  }

  function snackCartDecrement( snack: Snack ) {
    updateCartQuantity( snack, snack.quantity - 1 )
  }

  function confirmOrder() {
    return
  }

  function updateCartQuantity(snack: Snack, newQuantity: number) {
    return
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackCartIncrement,
        snackCartDecrement,
        confirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
