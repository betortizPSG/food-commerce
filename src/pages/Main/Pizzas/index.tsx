import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'
import { useSnacks } from '../../../Hooks/useSnacks'

export default function Pizzas() {

  const { pizzas } = useSnacks()

  return (
    <div>
      <Head title="Pizzas" description="Nossos melhores pizzas"/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </div>
  )
}
