import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "vimal",
    age: 11
  }

  let myArr = [1,2,3];
  return (
    <>
     <h1 className='bg-green-500 text-black p-4 rounded-xl ' >Tailwind test</h1>
    <Card userName="chaiaurcode" btnText="Click me" />
    <Card userName="vimal"   />
    </>
  )
}

export default App;
