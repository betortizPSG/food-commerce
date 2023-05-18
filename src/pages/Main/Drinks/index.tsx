import React from 'react'
import Head from '../../../components/Head'
import SnackTitle from './../../../components/SnackTitle/index'
import Snacks from '../../../components/Snacks'

export default function Drinks() {
  const data = [
    {
      id: 1,
      snacks: 'drinks',
      name: 'Coca-Cola',
      price: 5.0,
      description: 'Refrigerante de 350ml',
      image:
        'https://assets.vtex.app/unsafe/1020x930/center/middle/https%3A%2F%2Fcarrefourbrfood.vtexassets.com%2Farquivos%2Fids%2F26331723%2F5761719_1.jpg%3Fv%3D1770814953',
    },
    {
      id: 2,
      snacks: 'drinks',
      name: 'Fanta Laranja',
      price: 5.0,
      description: 'Refrigerante de 350ml',
      image:
        'https://hiperideal.vteximg.com.br/arquivos/ids/197318/557307.jpg?v=637828722328930000',
    },
    {
      id: 3,
      snacks: 'drinks',
      name: 'Fanta Uva',
      price: 5.0,
      description: 'Refrigerante de 350ml',
      image:
        'https://assets.vtex.app/unsafe/1020x930/center/middle/https%3A%2F%2Fcarrefourbrfood.vtexassets.com%2Farquivos%2Fids%2F26331723%2F5761719_1.jpg%3Fv%3D1770814953',
    },
    {
      id: 4,
      snacks: 'drinks',
      name: 'Fanta Guaraná',
      price: 5.0,
      description: 'Refrigerante de 350ml',
      image:
        'https://hiperideal.vteximg.com.br/arquivos/ids/197318/557307.jpg?v=637828722328930000',
    },
    {
      id: 5,
      snacks: 'drinks',
      name: 'Fanta Laranja',
      price: 5.0,
      description: 'Refrigerante de 350ml',
      image:
        'https://hiperideal.vteximg.com.br/arquivos/ids/197318/557307.jpg?v=637828722328930000',
    },
  ]

  return (
    <div>
      <Head title='Drinks' description='Nossos melhores drinks' />
      <SnackTitle>Drinks</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </div>
  )
}
