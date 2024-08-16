
import { useCounter } from "../hooks/useCounter";
import useFetch from "../hooks/useFetch"
import LoadingMessage from "../03-examples/LoadingMessage";
import PokemosCar from "../03-examples/PokemosCar";


export default function Layout() {
  
    const {sumar,restar,resetear,counter}=useCounter(1)

    const {data,isLoading,hasError}=useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    
    
    return (
        <>
            <h1>Información del Pokémon</h1>
            <hr />

            {isLoading ? <LoadingMessage /> : <PokemosCar id={data.id} name={data.name} sprites={[
                data.sprites.front_default,
                data.sprites.back_default,
                data.sprites.front_shiny,
                data.sprites.back_shiny,

            ]}/>}

            <h2>Pokémon: <strong>{data?.name}</strong></h2>

            <button onClick={()=>{restar(1)}} className="btn btn-primary mt-2">Anterior</button>
            <button onClick={resetear} className="btn btn-primary mt-2">Restablecer</button>
            <button onClick={()=>{sumar(1)}} className="btn btn-primary mt-2">Siguiente</button>
        </>
    )
}
