import { useEffect, useState } from "react"

const localCache = {};

export default function useFetch(url) {

    


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    })

    useEffect(() => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        })
        obtenerFetch()
    }, [url])

    const obtenerFetch = async()=>{

        if (localCache[url]) {
            console.log('usando cache');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: true,
                error: null
            })
            return
        }

        const respuesta = await fetch(url)

        await new Promise(resolve=>setTimeout(resolve,2000))

        if (!respuesta.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: respuesta.status,
                    message: respuesta.statusText,
                }
            })
            return
        }


        const data = await respuesta.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        })
        // console.log(data);
        localCache[url]= data;
    }
    


    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
