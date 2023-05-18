import React, {useState, useEffect} from 'react'
import Head from '../../../components/Head'
import SnackTitle from './../../../components/SnackTitle/index';
import Snack from '../../../components/Snacks';
import api from '../../../services/api'

export default function IceCreams() {

  const [icecreams, setIceCreams] = useState([])
  
  useEffect(() => {
    (async () => {
      const { data } = await api.get('/ice-creams')
      setIceCreams(data)
    })()
  }, [])

  return (
    <div>
      <Head title="Ice Creams" description="Nossos melhores ice creams"/>
      <SnackTitle>Ice Creams</SnackTitle>
      <Snack snacks={icecreams}></Snack>
    </div>
  )
}
