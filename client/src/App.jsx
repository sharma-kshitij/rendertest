import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('https://rendertest-gadc.onrender.com/')
   .then(response => response.json())
   .then(data => console.log(data));
}, []);

  return (
    <>
      <div>
        Hello
      </div>
    </>
  )
}

export default App
