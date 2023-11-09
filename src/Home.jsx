import { useContext, useState } from "react"
import { AppContext } from "./App"

function Home (){

    const value=useContext(AppContext)

    console.log(value,'value');

const increment=()=> value.increment()
const decrement=()=> value.decrement()
const reset=()=> value.reset()
// const bgChange=()=>props.bgChange()
const input=(e)=>{
 value.input(e.target.value)
}

 

    return(
        <>
     <div style={{background:value.color, height:'100vh', width:'100%'}}>
     <div className="div" style={{background:value.color}} >
    <button onClick={increment} >+</button>
    <h1>{value.state}</h1>
    {value.state===0 ?
    <button disabled onClick={decrement}>-</button> :
    <button onClick={decrement}>-</button>

    }

    <button onClick={reset}>reset</button>
    {/* <button onClick={bgChange}>bgchange</button> */}
     <input onChange={input} type="text"></input>
    </div>
   
    </div>
    </>
    )
}

export default Home