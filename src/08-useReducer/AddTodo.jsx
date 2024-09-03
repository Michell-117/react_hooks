import { useForm } from "../hooks/useForm";


export const AddTodo = ({onNewTodo}) => {
    // const [tarea, setTarea] = useState('')

    // const tareaAgregar = ({target})=>{
    //     const {value}=target;
    //     setTarea(`${value}`)
    // }

    const{description,actualizarFormulario,resetearFormulario} = useForm({
        description: ''
    })
    
    const agregarTarea = (e)=>{

        e.preventDefault();

        if(description.length <= 1)return;

        const nuevaTarea = {
            id: new Date().getTime(),
            description,
            done:false
        }
        onNewTodo(nuevaTarea)
        resetearFormulario()
   

    }


    return (
        <>
            <form>
                
                <input 

                    value={description}
                    onChange={actualizarFormulario}
                    type="text" 
                    name="description"
                    placeholder= "Que hay que hacer?"
                    className = 'form-control'
                />

                <button 
                    onClick={agregarTarea}
                    type="submit"
                    className= 'btn btn-outline-primary mt-1'
                >Agregar</button>

            </form>
        </>
    )
}
