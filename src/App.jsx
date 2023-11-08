import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'


function App() {

  const[color, setColor] =useState()
  const[state,setState]=useState(0)
  const increment=()=>setState(state+1);
  const decrement=()=>state===0 ? ' ' : setState(state-1);
  const reset=()=>setState(0);
  // const bgChange=()=>setColor('yellow');
  const input=(e)=>setColor(e)
  

  
 

  return(
  <>
  <Home input={input} increment={increment} decrement={decrement} state={state} reset={reset} color={color}/>
  </>

  )
  
}

export default App
