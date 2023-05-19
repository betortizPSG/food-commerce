import {useContext} from 'react'
import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'
import { SnackContext } from '../../../contexts/SnackContext'

export default function Pizzas() {

  const { pizzas } = useContext(SnackContext)

  return (
    <div>
      <Head title="Pizzas" description="Nossos melhores pizzas"/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </div>
  )
}
