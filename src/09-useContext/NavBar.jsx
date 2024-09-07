import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { UserContext } from "./Context/UserContext";



export default function NavBar() {
    const {usuario}=useContext(UserContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">

                {/* <Link className="navbar-brand" to="/">Context</Link> */}
                <NavLink 
                    className={arg=>{
                        console.log(`home: ${arg.isActive}`);
                        return 'navbar-brand '
                    }} 
                    to={"/"}
                >
                    {usuario.nombre}
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="navbar-nav">
    
                        <NavLink 
                            className={({isActive})=>{
                                console.log(`home: ${isActive}`);
                                return `nav-link ${isActive?'active primary':''}`
                            }}
                            to={"/"}
                        >
                            Home
                        </NavLink>

                        <NavLink 
                            className={({isActive})=>{
                                console.log(`login: ${isActive}`);
                                return `nav-link ${isActive?'active primary':''}`
                            }}
                            to={"login"}
                        >
                            Login
                        </NavLink>
                        
                        <NavLink 
                            className={args=>{
                                console.log(`about: ${args.isActive}`);
                                return `nav-link ${args.isActive?'active primary':''}`
                            }}
                            to={"about"}
                        >
                            About
                        </NavLink>

                    </div>

                </div>
            </div>
        </nav>
    )
}
