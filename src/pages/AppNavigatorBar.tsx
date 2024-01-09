import { Outlet } from "react-router-dom"
import { TopMenu } from "../shared/TopMenu"
import { LeftMenu } from "../shared/LeftMenu"

export const AppNavigatorBar = () => {
  return (
    <div className="flex w-full h-full bg-fondo text-white">
      <LeftMenu/>

      <div className="flex flex-col w-full">
        <TopMenu></TopMenu>
        <div className=" w-full mt-10 bg-fondo text-black overflow-auto">
          <Outlet></Outlet>
        </div>
      </div>


    </div>

  )
}
