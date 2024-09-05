
export const ItemTodo = ({tarea, eliminarTarea, marcarTerminado}) => {

  

    return(
        <>
            <li className='list-group-item d-flex justify-content-between'>

                    <span 
                        className={`align-self-center ${tarea.done ? 'text-decoration-line-through': ''}`}
                        onClick={ ()=>marcarTerminado(tarea.id) }
                    >
                        {tarea.description}
                    </span>

                    <button 
                        className='btn btn-danger'
                        onClick={ ()=>eliminarTarea(tarea.id) }
                        // onClick={eliminarTarea(tarea.id)}
                    >
                        Borrar
                    </button>
            </li>
        </>
    )
}
