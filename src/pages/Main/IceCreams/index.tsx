import {useContext} from 'react'
import Head from '../../../components/Head'
import SnackTitle from './../../../components/SnackTitle/index';
import Snack from '../../../components/Snacks';
import { SnackContext } from '../../../contexts/SnackContext';

export default function IceCreams() {

  const { iceCreams } = useContext(SnackContext)

  return (
    <div>
      <Head title="Ice Creams" description="Nossos melhores ice creams"/>
      <SnackTitle>Ice Creams</SnackTitle>
      <Snack snacks={iceCreams}></Snack>
    </div>
  )
}
