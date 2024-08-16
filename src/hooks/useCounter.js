import { useState } from "react"

export const useCounter = (initialValue = 15)=>{

    const [counter, setCounter] = useState(initialValue)

    const sumar = (n=1)=>{
        setCounter(counter + n)
    }
    const resetear = ()=>{
        setCounter(initialValue)
    }
    const restar = (n=1)=>{
        if (counter===1 ) {
            return
        }
        setCounter(counter - n)
    }
    
    return {
        counter,
        sumar,
        resetear,
        restar
    }
}