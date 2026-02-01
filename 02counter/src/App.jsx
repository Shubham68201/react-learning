import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(15);

  // let counter=15

  const addValue=()=>{
    // counter=counter+1
    if(counter<20)
    setCounter(counter+1)

    console.log("Clicked = ",counter)
  }

  const removeValue=()=>{
    if(counter>0)
    setCounter(counter-1)

    console.log("Clicked : ",counter)
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter : {counter}</h2>

      <button
      onClick={addValue}
      >Add value : {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value : {counter}</button>

      <p>footer : {counter}</p>
    
    </>
  )
}

export default App
