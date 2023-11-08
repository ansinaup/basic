import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'


function App() {
  const [state, setState] = useState(5);

  const myfun=(e)=>{
    console.log('calling');
    setState(e);
  }

  return (
    <>
    <Home data={'data'} fun={myfun} call={state}/>  
    </>
  )
}

export default App
