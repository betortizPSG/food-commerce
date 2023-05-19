import { useContext } from 'react'
import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'
import { SnackContext } from '../../../contexts/SnackContext'

export default function Burgers() {

  const { burgers } = useContext(SnackContext)

  return (
    <div>
      <Head title='Hambúrgueres' description='Nossos melhores burgues' />
      <SnackTitle>Burgers</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </div>
  )
}
