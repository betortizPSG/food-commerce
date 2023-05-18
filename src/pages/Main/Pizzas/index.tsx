import React, {useState, useEffect} from 'react'
import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'
import api from '../../../services/api'

export default function Pizzas() {

  const [pizzas, setPizzas] = useState([])
  
  useEffect(() => {
    (async () => {
      const { data } = await api.get('/pizzas')
      setPizzas(data)
    })()
  }, [])

  return (
    <div>
      <Head title="Pizzas" description="Nossos melhores pizzas"/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </div>
  )
}
