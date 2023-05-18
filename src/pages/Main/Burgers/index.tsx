import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Bacon',
      description: 'Pão, carne, queijo, bacon, alface, tomate e maionese',
      price: 22.9,
      image: 'https://i.imgur.com/hLvGMHv.jpeg',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Frango',
      description: 'Pão, carne, queijo, frango, alface, tomate e maionese',
      price: 20.9,
      image: 'https://i.imgur.com/EVWpgeV.jpeg',
    },
    {
      id: 3,
      snack: 'burger',
      name: 'Vegano',
      description: 'Pão, carne, queijo, alface, tomate e maionese',
      price: 22.9,
      image: 'https://i.imgur.com/nYMq1l4.jpeg',
    },
    {
      id: 4,
      snack: 'burger',
      name: 'Carne Queijo',
      description: 'Pão, carne, queijo, alface, tomate e maionese',
      price: 27.9,
      image: 'https://i.imgur.com/gEVLm5f.jpeg',
    },
    {
      id: 5,
      snack: 'burger',
      name: 'Carne Extra',
      description: 'Pão, carne, queijo, alface, tomate e maionese',
      price: 23.9,
      image: 'https://i.imgur.com/v448h65.jpeg',
    },
    {
      id: 6,
      snack: 'burger',
      name: 'Carne Especial',
      description: 'Pão, carne, queijo, alface, tomate e maionese',
      price: 25.9,
      image: 'https://i.imgur.com/UDPmgAx.jpeg',
    },
  ]

  return (
    <div>
      <Head title='Hambúrgueres' description='Nossos melhores burgues' />
      <SnackTitle>Burgers</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </div>
  )
}
