import { Head } from '../../../components/Head'
import SnackTitle from './../../../components/SnackTitle/index'
import Snack from '../../../components/Snacks'
import { useSnacks } from '../../../Hooks/useSnacks'

export default function IceCreams() {
  const { iceCreams } = useSnacks()

  return (
    <div>
      <Head title='Ice Creams' description='Nossos melhores ice creams' />
      <SnackTitle>Ice Creams</SnackTitle>
      <Snack snacks={iceCreams}></Snack>
    </div>
  )
}
