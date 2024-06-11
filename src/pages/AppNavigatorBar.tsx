import { Navigate, Outlet } from "react-router-dom"
import { TopMenu } from "../shared/TopMenu"
import { LeftMenu } from "../shared/LeftMenu"
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";

export const AppNavigatorBar = () => {

    const { jwt } = useAuthStore();

    useEffect(() => {
        console.log(jwt)
    }, [jwt])



    return (
        <div className="flex w-full h-full bg-sky-100 text-white">
            <LeftMenu />

            <div className="flex flex-col w-full">
                <TopMenu></TopMenu>
                <div className=" w-full pt-5 text-black overflow-auto">
                    {jwt == null ? <Navigate to="/usuario"  />
                        : <Outlet></Outlet>}
                </div>
            </div>

        </div>

    )
}
