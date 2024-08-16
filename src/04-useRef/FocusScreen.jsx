import { useRef } from "react"

export default function FocusScreen() {

    const inputRef = useRef()

    // console.log(ref);
    const onClicc =()=>{
        console.log(inputRef);
        inputRef.current.select()
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                type="text"
                placeholder="Ingrese su nombre" 
                className="form-control mt-2"
            />
            <input 
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre" 
                className="form-control mt-2"
            />
            <input 
                type="text"
                placeholder="Ingrese su nombre" 
                className="form-control mt-2"
            />

            <button onClick={onClicc} className="btn btn-primary mt-2">Set focus</button>
        </>
    )
}
