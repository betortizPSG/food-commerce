import React, { useContext} from 'react'
import Head from '../../../components/Head'
import SnackTitle from './../../../components/SnackTitle/index'
import Snacks from '../../../components/Snacks'
import { SnackContext } from '../../../contexts/SnackContext'

export default function Drinks() {

  const { drinks } = useContext(SnackContext)
 
  return (
    <div>
      <Head title='Drinks' description='Nossos melhores drinks' />
      <SnackTitle>Drinks</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </div>
  )
}
