import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  // let count = 0
  let [count, setCount] = useState(0)


  function increment(){
    // count = count + 1
    // console.log(count)
    setCount(count + 1)
  }

  function decrement(){
    // count = count - 1
    // console.log(count)
    setCount(count - 1)
  }
  

  function reset(){
    // count = 0
    // console.log(count)
    setCount(0)
  }
  
  

  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div className='buttons'>
        {/* <button onClick={increment}>➕ INCREMENT</button>
        <button onClick={decrement}>➖ DECREMENT</button>
        <button onClick={reset}>🔄 RESET</button> */}
        <Button text="INCREMENT" func={increment}/>
        <Button text="DECREMENT" func={decrement}/>
        <Button text="RESET" func={reset}/>
      </div>
    </>
  )
}

// function Button({text, func}){
//   return(
//     <button onClick={func}>{text}</button>
//   )
// }

export default App
