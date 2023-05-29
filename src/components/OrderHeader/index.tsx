import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { Container } from './styles'
import { useCart } from '../../Hooks/useCart';
import { ReactComponent as CartIcon} from '../../assets/shopping-cart.svg'

export function OrderHeader() {

  const { cart } = useCart()
  return (
    <Container>
      <Link to='/'>
        <img src={logoImg} alt='Food Commerce' />
      </Link>
      <div>
        <div>
          <h3>Meus Pedidos</h3>
          <span>
            <strong>
              {`${cart.length}`.padStart(2, '0')} {cart.length === 1 ? 'lanche' : 'lanches'}
            </strong>
          </span>
        </div>
        <CartIcon />
      </div>
    </Container>
  )
}