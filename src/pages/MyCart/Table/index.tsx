import { useCart } from '../../../Hooks/useCart'

import { TableDesktop } from './TableDesktop'

export function Table() {
  const { cart } = useCart()

  if (cart.length === 0) return <h1>Não existe pedidos no carrinho!</h1>

  return <TableDesktop />
}
