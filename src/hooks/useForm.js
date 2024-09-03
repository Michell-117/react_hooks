import { useState } from "react"


export const useForm = (formulario = {})=>{
    const [formState, setFormState] = useState(formulario)

    const actualizarFormulario = ({target})=>{
        const {name,value}=target
        setFormState({
            ...formState,
            [name]: value
        })
        // console.log(formState);
    }

    const resetearFormulario=()=>{
        setFormState({...formulario})
    }

    return {
        ...formState,
        actualizarFormulario,
        resetearFormulario
    }
}