import React from 'react'
import { ItemTodo } from './ItemTodo'

export const ListTodo = ({todos=[],eliminarTarea,marcarTerminado} ) => {
    

    return(
        <>
            <ul className='list-group'>
                {
                    todos.map(todo=>(
                        <ItemTodo key={todo.id} tarea={todo} eliminarTarea={eliminarTarea} marcarTerminado={marcarTerminado}/>
                        
                    ))
                    
                    // todos.map(todo=>{
                    //     <ItemTodo identficador={todo.id} tarea={todo.description} />
                    //     console.log(todo.id);
                    // })
                    
                    
                }

            </ul>
        </>
    )
}
