import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-blue-500 p-2 text-white text-xl font-bold'> React Redux Toolkit </h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
