
const initialState=[{
    id: 1,
    todo: 'recolectar la piedra del alma',
    done: false,
}];

const miReducer = (state=initialState, action={})=>{
    if (action.type === '[TODO] agregar tarea') {
        return [...state, action.payload]
    }

    return state;
}

let tareas = miReducer();
console.log(tareas);

const nuevoTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}

const agregarAccion = {
    type: '[TODO] agregar tarea',
    payload: nuevoTodo,
}

tareas = miReducer(tareas,agregarAccion);

console.log(tareas);