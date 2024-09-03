
export const ItemTodo = ({tarea}) => {
    const eliminarTarea = (event)=>{
        console.log(event);
    }

    return(
        <>
            <li className='list-group-item d-flex justify-content-between'>
                    <span className='align-self-center'>{tarea}</span>
                    <button 
                    onClick={eliminarTarea}
                        className='btn btn-danger'
                    >
                        Borrar
                    </button>
            </li>
        </>
    )
}
