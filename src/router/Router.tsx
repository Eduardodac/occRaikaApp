import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AppNavigatorBar } from "../pages/AppNavigatorBar"
import { HomePage } from "../pages/HomePage"
import { Curriculum } from "../pages/Curriculum/Curriculum"
import { PerfilExterno } from "../pages/Curriculum/PerfilExterno"
import { Academica } from "../pages/Curriculum/Academica"
import { Religiosa } from "../pages/Curriculum/Religiosa"
import { Espiritual } from "../pages/Curriculum/Espiritual"
import { Filosofica } from "../pages/Curriculum/Filosofica"
import { Intelectual } from "../pages/Curriculum/Intelectual"
import { PerfilInterno } from "../pages/PerfilInterno"
import { UserConteiner } from "../pages/user/UserConteiner"
import { Login } from "../pages/user/Login"
import { Register } from "../pages/user/Register"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/usuario" element={<UserConteiner></UserConteiner>}>
                    <Route path="login" element={<Login />} />
                    <Route path="registrar" element={<Register />} />
                    <Route index element={<Navigate to="/usuario/login" replace />} />
                </Route>
                <Route path="/" element={<AppNavigatorBar />}>
                    <Route path="home" element={<HomePage />} />
                    <Route path="PerfilInterno" element={<PerfilInterno />} />
                    <Route path="curriculum" element={<Curriculum />}>
                        <Route path="perfil-externo" element={<PerfilExterno />} />
                        <Route path="form-academica" element={<Academica />} />
                        <Route path="form-religiosa" element={<Religiosa />} />
                        <Route path="vivencia-espiritual" element={<Espiritual />} />
                        <Route path="form-filosofica" element={<Filosofica />} />
                        <Route path="form-intelectual" element={<Intelectual />} />
                        <Route index element={<Navigate to="/curriculum/perfil-externo" replace />} />
                        <Route path="*" element={<Navigate to="/curriculum/perfil-externo" replace />} />
                    </Route>
                    <Route index element={<Navigate to="/home" replace />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
