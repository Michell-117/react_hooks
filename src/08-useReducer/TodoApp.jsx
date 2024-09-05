import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { ListTodo } from "./ListTodo";
import { AddTodo } from "./AddTodo";
import { useTarea } from "../hooks/useTarea";



export default function TodoApp() {
  const{todos, addTarea, deleteTarea, marcarTerminado,totalTodos, todosPendientes}=useTarea()

  // const initialState = []

  // const init = ()=>{
  //   return JSON.parse( localStorage.getItem('tareas') || [])
  // }


  // const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  // useEffect(() => {
  //   localStorage.setItem('tareas',JSON.stringify(todos))
  // }, [todos])
  

  // const addTarea = (tarea)=>{
  //   const action = {
  //     type: '[TAREA] Agregar tarea',
  //     payload: tarea
  //   }
  //   dispatch(action)
  // }

  // const deleteTarea=(id)=>{
  //   // console.log(id);
  //   dispatch({
  //     type: '[TAREA] Eliminar tarea',
  //     payload: id
  //   })
  // }

  // const marcarTerminado =(id)=>{
  //   // console.log(id);
  //   dispatch({
  //     type: '[TAREA] Marcar tarea finalizada',
  //     payload: id
  //   })
  // }

  console.log(todosPendientes);
  return (
    <>
      <h1>Todo App: {totalTodos},  <small>pendientes: {todosPendientes}</small></h1>
      
      <hr />

      <div className ='row'>
      
        <div className ='col-7'>

          {/* <ListTodo todos={todos}/> */}
          <ul className='list-group'>
            <ListTodo todos={todos} eliminarTarea={deleteTarea} marcarTerminado={marcarTerminado}/>
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

