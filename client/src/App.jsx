import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('https://rendertest-gadc.onrender.com/')
   .then(response => response.json())
   .then(data => console.log(data));

  //      fetch('http://localhost:3000/')
  //  .then(response => response.json())
  //  .then(data => console.log(data));
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
