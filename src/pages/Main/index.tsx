import { Siderbar } from '../../components/Sidebar'
import { Container } from './styles'
import LogoImg from '../../assets/logo192.png'

export default function Main() {
  return (
    <Container>
      <Siderbar />
      <h1>Main</h1>
      <img src={LogoImg} alt="Logo"/>
    </Container>
  )
}
