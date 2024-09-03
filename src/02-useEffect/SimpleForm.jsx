import { useEffect, useState } from "react"
import MessageComponent from "./MessageComponent";


export default function SimpleForm() {

    const [formState, setFormState] = useState({
        username: "kanaN7JS",
        email: 'michell.ra47@gmail.com'
    })

    const {username,email} = formState;

    const onInputChange = ({target})=>{
        const{name,value} = target
        setFormState({
            ...formState,
           [name]: value
        })
    }

    useEffect(() => {
      // console.log('useEfect llamado');
    }, [])

    useEffect(() => {
      // console.log('useEfect llamado al cambiar el formState');
      
    }, [formState])

    useEffect(() => {
      // console.log('useEfect llamado al cambiar el username');
    }, [username])

    useEffect(() => {
      // console.log('useEfect llamado al cambiar el email');
    }, [email])

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input 
                onChange={onInputChange}
                type="text"
                className="form-control"
                placeholder="Username"
                name="username" 
                value={username}
            />
            
            {
              (username === 'kanaN7J') && <MessageComponent />
            }

            <input 
                onChange={onInputChange}
                type="email"
                className="form-control mt-2"
                placeholder="user@gmail.com"
                name="email" 
                value={email}
            />

            
        </>
    )
}
