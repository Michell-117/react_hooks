import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { ListTodo } from "./ListTodo";
import { AddTodo } from "./AddTodo";



export default function TodoApp() {

  const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: 'Recolectar la piedra del alma',
    //   done: false
    // }

  ]

  const init = ()=>{
    return JSON.parse( localStorage.getItem('tareas') || [])
  }


  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('tareas',JSON.stringify(todos))
  }, [todos])
  

  const addTarea = (tarea)=>{
    const action = {
      type: '[TAREA] Agregar tarea',
      payload: tarea
    }
    dispatch(action)
  }


  return (
    <>
      <h1>Todo App: 10,  <small>pendientes: 4</small></h1>
      
      <hr />

      <div className ='row'>
      
        <div className ='col-7'>

          {/* <ListTodo todos={todos}/> */}
          <ul className='list-group'>
            <ListTodo todos={todos}/>
          </ul>

        </div>

        <div className='col-5'>
          <h4>Agregar Todo</h4>
          <hr />
          
          <AddTodo onNewTodo={addTarea}/>
          
        </div>
      </div>

      
    </>
  )
}

