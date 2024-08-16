import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const tareaPesada = (numero=1000)=>{
    for (let index = 0; index < numero; index++) {
        console.log('tarea pesada'); 
    }
    return numero
}

export default function HookMemo() {
    const {counter,sumar,restar,resetear}=useCounter(1000)
    const [show, setShow ] = useState(true)

    const numeroMemorizado = useMemo(() => tareaPesada(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />
            <h2>{numeroMemorizado}</h2>

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
