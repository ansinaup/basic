import { useState } from "react"

function Home (props){

const[count,setCount]=useState(98)
    return(
        <>
       <h1>{props.data}</h1>
       <h1>{props.fun(count)}</h1>
       <h1>{props.call}</h1>
        </>
    )
}

export default Home