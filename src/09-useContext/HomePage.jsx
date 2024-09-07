import { useContext } from "react"
import { UserContext } from "./Context/UserContext";

export default function HomePage() {

    const {usuario,setUsuario} = useContext(UserContext);
    console.log(usuario);
    console.log(setUsuario);

    return (
        <>
            <h1>Home Page</h1>
            <hr />
            <button
                onClick={()=>{
                    setUsuario({
                        nombre:'Michell',
                        apellidoPaterno:'Ruiz',
                        apellidoMaterno:'Arredondo',
                        email:'michell.raa47@gmail.com'
                    })
                }}
            >
                Asignar usuario
            </button>
        </>
    )
}
