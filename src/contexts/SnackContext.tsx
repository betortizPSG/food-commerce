import { createContext, useState, useEffect } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { getBurgers, getDrinks, getPizzas, getIceCreams } from '../services/api'

interface SnackContextProps {
  burgers: SnackData[]
  drinks: SnackData[]
  pizzas: SnackData[]
  iceCreams: SnackData[]
}

interface SnackProviderProps {
  children: React.ReactNode
}

export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({ children }: SnackProviderProps){

  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const burgerRequest = await getBurgers()
        const drinkRequest = await getDrinks()
        const pizzaRequest = await getPizzas()
        const iceCreamRequest = await getIceCreams()

        const requests = await Promise.all([
          burgerRequest,
          drinkRequest,
          pizzaRequest,
          iceCreamRequest,
        ])

        const [
          { data: burgerResponse },
          { data: drinkResponse },
          { data: pizzaResponse },
          { data: iceCreamResponse },
        ] = requests

        setBurgers(burgerResponse)
        setDrinks(drinkResponse)
        setPizzas(pizzaResponse)
        setIceCreams(iceCreamResponse)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <SnackContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
      {children}
    </SnackContext.Provider>
  )
}