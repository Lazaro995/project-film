import { useEffect, useState } from 'react'
import './App.css'
import { Button } from '@nextui-org/react'
import Counter from './components/counter'
import { data } from './mocks/cart.json'
import { CounterProps } from './components/counter/interfaces'
import { Route, Link } from 'react-router-dom'
function App() {
  const [result, setResult] = useState<CounterProps[]>([])
  useEffect(() => {
    const timer = setTimeout(() => {
      setResult(data)
    }, 1000);
    return () => clearTimeout(timer)
  }, [])
  return (
    <main>
      <section id="GA">
        {
          /* 1) Crear logica para que si Result esta vacio muestre un spinner
          */
          result.map(({ stock, price, available, imagen }) => (<Counter stock={stock} price={price} available={available} imagen={imagen} />))
        }
      </section>
    </main>
  )
}
export default App

//app debería encargarse de llamar rutas, ninguna otra lógica mas
