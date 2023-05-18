import React from 'react'
import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'

export default function Pizzas() {

  const data = [
    {
      id: 1,
      snacks: 'pizzas',
      name: 'Calabresa',
      price: 5.0,
      description: 'Pizza de calabresa',
      image:
        'https://pastapizza.com.br/wp-content/uploads/2021/06/marguerit-1536x1007.png',
    },
    {
      id: 2,
      snacks: 'pizzas',
      name: 'Frango',
      price: 5.0,
      description: 'Pizza de frango',
      image:
        'https://pastapizza.com.br/wp-content/uploads/2021/06/Gorgonzola-1536x1007.png',
    },
    {
      id: 3,
      snacks: 'pizzas',
      name: 'Portuguesa',
      price: 5.0,
      description: 'Pizza de portuguesa',
      image:
        'https://pastapizza.com.br/wp-content/uploads/2017/07/oregano.png',
    }
  ]

  return (
    <div>
      <Head title="Pizzas" description="Nossos melhores pizzas"/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </div>
  )
}
