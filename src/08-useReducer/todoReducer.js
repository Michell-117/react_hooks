
export const todoReducer = (initialState=[],action)=>{

    switch (action.type) {
        case '[TAREA] Agregar tarea':
            
            return [...initialState,action.payload]
            
        case'[TAREA] Eliminar tarea':
            return initialState.filter(tarea=>tarea.id !== action.payload)
            
        case'[TAREA] Marcar tarea finalizada':
            return initialState.map( tarea =>{
                if( tarea.id === action.payload){
                    return {
                        ...tarea,
                        done: !tarea.done
                    }
                }
                return tarea
            })
            
        default:
            return initialState;
    }

}