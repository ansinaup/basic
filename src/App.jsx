import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'


export const AppContext=createContext()

function App() {

  const[color, setColor] =useState(0)
  const[state,setState]=useState('')


  const increment=()=>setState(state+1);
  const decrement=()=>state===0 ? ' ' : setState(state-1);
  const reset=()=>setState(0);
  // const bgChange=()=>setColor('yellow');
  const input=(e)=>setColor(e)

  let obj={
    input:input,
    increment:increment,
    decrement:decrement,
    state:state,
    reset:reset,
    color:color
  }
  

  
 

  return(
  <>
  <AppContext.Provider value={obj}>
    <Home/>
  </AppContext.Provider>
  </>

  )
  
}

export default App
