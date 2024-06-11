import { Navigate, Outlet } from 'react-router-dom';
// import { Image } from 'primereact/image';


import { useEffect } from 'react';
import { useAuthStore } from '../../store/authStore';

export const UserConteiner = () => {
    const {jwt} = useAuthStore();

    useEffect(()=>{

    },[jwt])

    return (
        <section className="w-full h-full flex justify-center align-middle bg-[url('/wallpaperLogin.avif')]">
            <section className="m-auto bg-white text-center rounded w-3/4 my-20">
                
                {jwt != null ? <Navigate to="/home" />
                :<Outlet></Outlet>}
            </section>

        </section>
    )
}
