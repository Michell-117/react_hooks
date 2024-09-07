import { useState } from "react"
import { UserContext } from "./UserContext"

export default function UserProvider({children}) {

    const initialState = {
        nombre: 'Sin asignar',
        apellidoPaterno: 'Sin asignar',
        apellidoMaterno: 'Sin asignar',
        email: 'Sin asignar'
    }

    const [usuario, setUsuario] = useState(initialState)
    
    return (
         <UserContext.Provider value={{usuario, setUsuario}}>
            {children}
         </UserContext.Provider>   
    )
}
