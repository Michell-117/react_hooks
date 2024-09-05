import { useEffect, useReducer, useState } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

export const useTarea = () => {
    const initialState = []

    const init = ()=>{
        return JSON.parse( localStorage.getItem('tareas') || [])
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState,init )

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(todos))
    
    }, [todos])

    const addTarea = (tarea)=>{
        const action = {
          type: '[TAREA] Agregar tarea',
          payload: tarea
        }
        dispatch(action)
    }
    
    const deleteTarea=(id)=>{
        // console.log(id);
        dispatch({
          type: '[TAREA] Eliminar tarea',
          payload: id
        })
    }
    
    const marcarTerminado =(id)=>{
        // console.log(id);
        dispatch({
          type: '[TAREA] Marcar tarea finalizada',
          payload: id
        })
    }

    // const [pendientes, setPendientes] = useState(0)
    // const tareasFaltantes=()=>{
        
    //     let n = 0
    //     todos.forEach(tarea=>{
    //         if(!tarea.done){
    //             n++
    //         }
    //     })

    //     setPendientes(n)
    //     return pendientes

    // }

    // useEffect(() => {
    //     tareasFaltantes()
    
    // }, [todos])


    

    return {
        todos,
        addTarea,
        deleteTarea,
        marcarTerminado,
        todosPendientes: todos.filter(tarea=>!tarea.done).length,
        totalTodos: todos.filter(tarea=>tarea.done).length
    }
}
