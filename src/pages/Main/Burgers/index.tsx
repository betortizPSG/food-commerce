import { useSnacks } from '../../../Hooks/useSnacks'
import { Head } from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'

export default function Burgers() {
  const { burgers } = useSnacks()

  return (
    <div>
      <Head title='Hambúrgueres' description='Nossos melhores burgues' />
      <SnackTitle>Burgers</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </div>
  )
}
