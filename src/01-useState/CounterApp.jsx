import { useState } from "react"

export default function CounterApp() {
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const {counter1, counter2, counter3}= counter;
    
    return (
        <>
            <h1>Counter 1: {counter1}</h1>
            <button className="btn" onClick={ ()=>setCounter( {
                    ...counter,
                    counter1: counter.counter1 + 1
                        
                    }
                ) } >+1</button>
            <hr />

            <h1>Counter 2: {counter2}</h1>
            <button className="btn" onClick={ ()=>setCounter( {
                        ...counter,
                        counter2: counter.counter2 + 1,
                    }
                ) } >+1</button>
            <hr />

            <h1>Counter 3: {counter3}</h1>
            <button className="btn" onClick={ ()=>setCounter( {
                        ...counter,
                        counter3: counter.counter3 + 1
                    }
                ) } >+1</button>
            <hr />
        
        </>
    )
}
