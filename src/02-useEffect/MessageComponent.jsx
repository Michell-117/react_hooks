import { useEffect, useState } from "react"

export default function MessageComponent() {
    const [coordenadas, setCoordenadas] = useState({
        x: 0,
        y: 0
    })

    const mostrarCoordenadas = ({x,y})=>{
        setCoordenadas({
            x,
            y
        })
        console.log('mouse event activado');
    }
    useEffect(() => {
            window.addEventListener('mousemove',mostrarCoordenadas)
            
        
        return () => {
            window.removeEventListener('mousemove',mostrarCoordenadas)
            console.log('mouse event desactivado');
        }
    }, [])
    
    return (
        <>
            <h3>Usuario ya existe</h3>
            <p>Eje x:{coordenadas.x}</p>
            <p>Eje y:{coordenadas.y}</p>
        </>
    )
}
