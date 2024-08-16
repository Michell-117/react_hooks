import { useState } from "react"

export default function ContadorComponent() {
    const [contador, setContador] = useState(15)

    return (
        <>
            <h2>Contador {contador}</h2>

            <button onClick={
                ()=> setContador(contador +1 )
            }>+1</button>
        </>
    )
}
