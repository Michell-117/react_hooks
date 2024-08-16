import { useCallback, useState } from "react"
import ShowIncrement from "./ShowIncrement"

const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementa = useCallback(
      (incrementador=1) => {
        setCounter( (value)=>value + incrementador );
      },
      [],
    )
    
    return (
        <>
            <h1>useCallback {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementa}/>
        </>
    )
}

export default CallBackHook