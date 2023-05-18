import React from 'react'
import Head from '../../../components/Head'
import SnackTitle from './../../../components/SnackTitle/index';
import Snack from '../../../components/Snacks';

export default function IceCreams() {

  const data = [
    {
      id: 1,
      snacks: 'icecreams',
      name: 'Ice Cream 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc vitae nunc. Donec auctor, nisl eu ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc vitae nunc.',
      price: 10.00,
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 2,
      snacks: 'icecreams',
      name: 'Ice Cream 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc vitae nunc. Donec auctor, nisl eu ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc vitae nunc.',
      price: 10.00,
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 3,
      snacks: 'icecreams',
      name: 'Ice Cream 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc vitae nunc. Donec auctor, nisl eu ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc vitae nunc.',
      price: 10.00,
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 4,
      name: 'Ice Cream 4',
      snacks: 'icecreams',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc vitae nunc. Donec auctor, nisl eu ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc vitae nunc.',
      price: 10.00,
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 5,
      name: 'Ice Cream 5',
      snacks: 'icecreams',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc vitae nunc. Donec auctor, nisl eu ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc vitae nunc.',
      price: 10.00,
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 6,
      name: 'Ice Cream 6',
      snacks: 'icecreams',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eu ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc vitae nunc. Donec auctor, nisl eu ultricies ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc vitae nunc.',
      price: 10.00,
      image: 'https://picsum.photos/200/300'
    }
  ]

  return (
    <div>
      <Head title="Ice Creams" description="Nossos melhores ice creams"/>
      <SnackTitle>Ice Creams</SnackTitle>
      <Snack snacks={data}></Snack>
    </div>
  )
}
