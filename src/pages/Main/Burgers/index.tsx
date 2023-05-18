import { useEffect, useState } from 'react'
import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../../../components/Snacks'
import { getBurgers } from '../../../services/api'

export default function Burgers() {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    ;(async () => {
      const burgersRequest = await getBurgers()
      setBurgers(burgersRequest.data)
    })()
  }, [])

  return (
    <div>
      <Head title='Hambúrgueres' description='Nossos melhores burgues' />
      <SnackTitle>Burgers</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </div>
  )
}
