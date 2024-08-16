import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"

export default function Memoriza() {

    const {counter,sumar,restar,resetear}=useCounter(0)
    const [show, setShow ] = useState(true)

    return (
        <>
            <h1>Counter: <Small value={counter}/></h1>
            <hr />

            <button
                className="btn btn-primary mt-2"
                onClick={()=>{sumar(1)}}
            >+1</button>
            <button
                className="btn btn-primary mt-2"
                onClick={resetear}
            >Resetear</button>
            <button
                className="btn btn-primary mt-2"
                onClick={()=>{restar(1)}}
            >-1</button>

            <button 
                onClick={()=>{setShow(!show)}}
                className="btn btn-outline-primary"
            >
                Hide/Show {JSON.stringify(show)}
            </button>
        </>
    )
}
