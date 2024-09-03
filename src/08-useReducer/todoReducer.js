
export const todoReducer = (initialState=[],action)=>{

    switch (action.type) {
        case '[TAREA] Agregar tarea':
            
            return [...initialState,action.payload]
            
        case'[TAREA] Eliminar tarea':
            return initialState.filter(tarea=>tarea.id !== action.payload)
        default:
            return initialState;
    }

}