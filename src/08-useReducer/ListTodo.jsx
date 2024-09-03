import React from 'react'
import { ItemTodo } from './ItemTodo'

export const ListTodo = ({todos=[]}) => {

    return(
        <>
            <ul className='list-group'>
                {
                    todos.map(todo=>(
                        <ItemTodo key={todo.id} tarea={todo.description} />
                        
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
