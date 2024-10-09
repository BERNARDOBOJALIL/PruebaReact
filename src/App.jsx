import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { ListaSuper } from './components/ListaSuper'

const PRODUCTOS = [
  {nombre: "Leche", precio: 100},
  {nombre: "Pan",precio: 200},
  {nombre: "Pasta",precio: 300},
  {nombre: "Tortilla",precio: 400},
  {nombre: "Aceite",precio: 500},
  {nombre: "Sal",precio: 600},
  {nombre: "Azucar",precio: 700},
  {nombre: "Fideos",precio: 800},
  {nombre: "Arroz",precio: 900},
  {nombre: "Tomate",precio: 1000},
  {nombre: "Pepino",precio: 1100},
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header title={"React + Vite"}color={"red"}/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ListaSuper productos={PRODUCTOS}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
