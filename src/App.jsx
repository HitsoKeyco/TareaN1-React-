
import { useState } from 'react'
import Counter from '../components/Counter'
import './App.css'


function App() {

  const [show, setShow] = useState(true)

  const showCount = () => {
    setShow(!show);
  }

  return (
    <>
    <div className="head">
      <button className = 'showHidden' onClick={showCount}> Show / Hidden</button>
    </div>
    
    {
      show ? (<Counter initialValue={1000} changeValue={5}/>) : <h3>El contador esta oculto</h3>
    }
    </>
  )
}

export default App
