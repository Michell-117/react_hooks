import { Link, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import { AboutPage } from "./AboutPage"
import NavBar from "./NavBar"
import NavBar2 from "./NavBar2"
import UserProvider from "./Context/UserProvider"



export const MainApp = () => {
    return (
        <UserProvider>
            <h1>Main App</h1>
            <NavBar/>
            <hr />

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="about" element={<AboutPage/>}/>

                {/* <Route path="/*" element={<LoginPage/>}/> */}

                <Route path="/*" element={<Navigate to='/'/>}/>

            </Routes>
        </UserProvider>
    )
}
