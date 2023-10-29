import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AppNavigatorBar } from "../pages/AppNavigatorBar"
import { HomePage } from "../pages/HomePage"
import { Curriculum } from "../pages/Curriculum"



export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<AppNavigatorBar></AppNavigatorBar>}>
                    <Route path = "home" element={<HomePage/>}/>
                    <Route path = "Curriculum" element={<Curriculum/>}/>

                    <Route index element={<Navigate to = "/home" replace/>}/>
                    <Route path = "*" element={<Navigate to = "/home" replace/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
