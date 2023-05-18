import React, { useState, useEffect} from 'react'
import Head from '../../../components/Head'
import SnackTitle from './../../../components/SnackTitle/index'
import Snacks from '../../../components/Snacks'
import {getDrinks} from '../../../services/api'

export default function Drinks() {
  
  const [drinks, setDrinks] = useState([])
  
  useEffect(() => {
    (async () => {
      const drinksRequest = await getDrinks()
      setDrinks(drinksRequest.data)
    })()
  }, [])

  return (
    <div>
      <Head title='Drinks' description='Nossos melhores drinks' />
      <SnackTitle>Drinks</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </div>
  )
}
