import { useCart } from '../../../../Hooks/useCart'
import plusImg from '../../../../assets/circle-plus.svg'
import minusImg from '../../../../assets/circle-minus.svg'

import { CurrencyFormat } from '../../../../helpers/CurrencyFormat'

import { Container } from './styles'
import { FaTrashAlt } from 'react-icons/fa';

export function TableDesktop() {
  const { cart, removeSnackFromCart } = useCart()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.snack}-${item.id}`}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{CurrencyFormat(item.price)}</span>
              </td>
              <td>
                <div>
                  <button type='button' onClick={() => console.log(`Decrementar snack`, item)}>
                    <img src={minusImg} alt='Remover quantidade' />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type='button' onClick={() => console.log(`Incrementar snack`, item)}>
                    <img src={plusImg} alt='Adicionar quantidade' />
                  </button>
                </div>
              </td>
              <td>
                <h5>{CurrencyFormat(item.subtotal)}</h5>
              </td>
              <td>
                <button type='button' onClick={() => removeSnackFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
