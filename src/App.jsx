import { useState } from 'react'
import './App.css'
import ShowCount from './components/ShowCount/ShowCount'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <ShowCount count={counter} />
      <button onClick={() => setCounter(counter - 1)}>
        Restar
      </button>
      <button onClick={() => setCounter(counter + 1)}>
        Sumar
      </button>
    </div>
  )
}

export default App
