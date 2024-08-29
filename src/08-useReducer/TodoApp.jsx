import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

export default function TodoApp() {

  const initialState = [
    {
      id: new Date().getTime(),
      description: 'Recolectar la piedra del alma',
      done: false
    },
    {
      id: new Date().getTime() * 2,
      description: 'Recolectar la piedra del alma',
      done: false
    }
  ]
  const [todos, dispatch] = useReducer(todoReducer, initialState)


  return (
    <>
      <h1>Todo App: 10,  <small>pendientes: 4</small></h1>
      
      <hr />

      <div className ='row'>
      
        <div className ='col-7'>

          {/* Crear un componente TodoList */}
          {/* este componente recive la lista de tareas y por cada una de ellas crea un nuevo item */}
          <ul className='list-group'>
            {
              todos.map(todo=>{
                // Crear un componente que cree un item
                <li key={todo.id} className='list-group-item d-flex justify-content-between'>
                  <span className='align-self-center'>Item 1</span>
                  <button className='btn btn-danger'>Borrar</button>
                </li>
              })
            }
          </ul>
          {/* Crear un componente TodoList */}

        </div>

        <div className='col-5'>
          <h4>Agregar Todo</h4>
          <hr />
          
          {/* Crear el componente para añadir un nuevo elemento a la lista de tareas */}
          <form>
            <input 
              type="text" 
              placeholder= "Que hay que hacer?"
              className = 'form-control'
            />
            <button 
              type="submit"
              className= 'btn btn-outline-primary mt-1'
            >
              Agregar
            </button>
          </form>
        </div>
      </div>

      
    </>
  )
}

