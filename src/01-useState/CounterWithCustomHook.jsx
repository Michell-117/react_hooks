import { useCounter } from "../hooks/useCounter"

export default function CounterWithCustomHook({}) {

    const{counter,sumar,resetear,restar}= useCounter(20);
    
    const sumatoria = 5
    const decrementar = 2
    
    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={ ()=>sumar(sumatoria) }>+{sumatoria}</button>
            <button className="btn btn-primary" onClick={ resetear }>Reset</button>
            <button className="btn btn-primary" onClick={ ()=>restar(decrementar) }>-{decrementar}</button>
        </>
    )
}
