import { Siderbar } from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import logoImg from '../../assets/logo.svg'
import MyOrder from '../../components/MyOrder';

export default function Main() {
  return (
    <Container>
      <Siderbar />
      <section>
        <img src={logoImg} alt="Logo" />
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  )
}
