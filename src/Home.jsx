import { useState } from "react"

function Home (props){

const increment=()=> props.increment()
const decrement=()=> props.decrement()
const reset=()=> props.reset()
// const bgChange=()=>props.bgChange()
const input=(e)=>{
 props.input(e.target.value)
}

 

    return(
     <>
     <div className="div" style={{background:props.color}} >
    <button onClick={increment} >+</button>
    <h1>{props.state}</h1>
    {props.state===0 ?
    <button disabled onClick={decrement}>-</button> :
    <button onClick={decrement}>-</button>

    }

    <button onClick={reset}>reset</button>
    {/* <button onClick={bgChange}>bgchange</button> */}
     <input onChange={input} type="text"></input>
    </div>
   
    </>
    )
}

export default Home