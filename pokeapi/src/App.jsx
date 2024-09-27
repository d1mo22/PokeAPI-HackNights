import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Card
          nombre='Charmander'
          tipo1='Fuego'
          tipo2='Agua'
        ></Card>
      </div>
    </>
  )
}

export default App
