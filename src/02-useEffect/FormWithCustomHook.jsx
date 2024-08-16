
import { useForm } from '../hooks/useForm'

export default function FormWithCustomHook() {

    const {formState,actualizarFormulario,resetearFormulario}=useForm({
        username: '',
        email: '',
        password: ''
    })

    const {username,email,password}=formState

    

    return (
        
        <>
            <input 
                onChange={actualizarFormulario}
                type="text" 
                className="form-control mt-2"
                placeholder="Username"
                name="username" 
                value={username}
                />
            <input 
                onChange={actualizarFormulario}
                type="email" 
                className="form-control mt-2"
                placeholder="email"
                name="email" 
                value={email}
                />
            <input 
                onChange={actualizarFormulario}
                type="password" 
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password" 
                value={password}
            />

            <button 
                onClick={resetearFormulario}
                className='btn btn-primary mt-2'
            >Resetear formulario</button>
        </>
    )
}
