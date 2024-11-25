import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  
  // let counter = 15

  const addValue = () => {
    // counter = counter + 1;
    if(counter<20){
    setCounter (counter + 1);

    }
  }
 const removeValue = () =>{
  if(counter>0){
    setCounter(counter-1); 
  }
 }
 const addmoreValue = () =>{
  setCounter(pervCounter => pervCounter +1);
  setCounter(pervCounter => pervCounter +1);
  setCounter(pervCounter => pervCounter +1);
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button 
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove value {counter} </button>
    <button onClick={addmoreValue} >Add 4 value at once {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
