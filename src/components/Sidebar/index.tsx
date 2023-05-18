import { useState } from 'react'
import { Container } from './styles'
import { NavLink } from 'react-router-dom'
import { ReactComponent as BurgerIcon} from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon} from '../../assets/pizza.svg'
import { ReactComponent as SodaPopIcon} from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon} from '../../assets/ice-cream.svg'
import menuImg from '../../assets/menu.svg'

export const Siderbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

/*   const toggleMenu = () => {
    const nav = document.querySelector('nav')
    nav?.classList.toggle('active')
  } */

  return (
    <div>
      <Container isMenuOpen={menuOpen}>
        <button type='button' onClick={handleToggleMenu}>
          <img src={menuImg} alt="Abrir e fechar o menu" />
        </button>
        <nav>
          <ul>
            <li><NavLink to="/" ><BurgerIcon /><span>Hamburgues</span></NavLink></li>
            <li><NavLink to="pizzas" ><PizzaIcon /><span>Pizzas</span></NavLink></li>
            <li><NavLink to="drinks" ><SodaPopIcon /><span>Bebidas</span></NavLink></li>
            <li><NavLink to="ice-creams" ><IceCreamIcon /><span>Sobremesas</span></NavLink></li>
          </ul>
        </nav>
      </Container>
    </div>
  )
}

