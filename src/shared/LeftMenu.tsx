import { SlideMenu } from 'primereact/slidemenu';
import { leftMenuItems } from './leftmenuItem';
import raikaLogo from '../assets/raikaImage.jpg'

export const LeftMenu = () => {
    const weigth = "250px"

    return (
        <div className={`flex flex-col ${weigth} bg-gray-menus `}>
            <div className="flex justify-center items-center h-16 pt-1">
                <img src={raikaLogo} width="100px"/> 
            </div>
            
            <div className=" h-full">
                <SlideMenu model={leftMenuItems} className='bg-gray-menus w-44 border-0 rounded-none ' viewportHeight={585} easing="ease-in" menuWidth={200}></SlideMenu>
            </div>
        </div>
    )
}