import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AppNavigatorBar } from "../pages/AppNavigatorBar"
import { HomePage } from "../pages/HomePage"
import { Curriculum } from "../pages/Curriculum/Curriculum"
import { PerfilInterno } from "../pages/Curriculum/PerfilInterno"



export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppNavigatorBar />}>
                    <Route path="home" element={<HomePage />} />
                    <Route path="directorio" element={<Curriculum />} />
                    <Route path="curriculum" element={<Curriculum />}>
                        <Route path="perfil-interno" element={<PerfilInterno />}/>
                        <Route index element={<Navigate to="/curriculum/perfil-interno" replace />} />
                        <Route path="*" element={<Navigate to="/curriculum/perfil-interno" replace />} />
                    </Route>
                    <Route index element={<Navigate to="/home" replace />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
