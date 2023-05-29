import { useSnacks } from '../../../Hooks/useSnacks'
import { Head } from '../../../components/Head'
import SnackTitle from './../../../components/SnackTitle/index'
import Snacks from '../../../components/Snacks'

export default function Drinks() {
  const { drinks } = useSnacks()

  return (
    <div>
      <Head title='Drinks' description='Nossos melhores drinks' />
      <SnackTitle>Drinks</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </div>
  )
}
