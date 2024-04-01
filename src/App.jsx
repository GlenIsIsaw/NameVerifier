import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      
      <Header />
      <Home />
     
     </div>
    </>
  )
}

export default App
