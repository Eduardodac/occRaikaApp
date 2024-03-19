import { SlideMenu } from 'primereact/slidemenu';
import { menuItems } from './menuItems';
import { leftBarStore } from '../store/leftBarStatus';


export const LeftMenu = () => {

    const { leftMenuItemsIcons, leftMenuItems } = menuItems();

    const leftBarStatus = leftBarStore((state) => state.status)
    const setLeftBarStatus = leftBarStore((state) => state.changeStatus)

    const toolBarSetLocalStorage = () => {
        setLeftBarStatus(!leftBarStatus);
        leftBarStatus ? localStorage.setItem("topBarStatus", "true") : localStorage.setItem("topBarStatus", "false");
    }


    return (
        <div className={`${leftBarStatus ? 'w-48' : 'w-20'} h-full relative flex flex-col items-center transition-all bg-gray-menus`}>

            <button className="flex justify-center items-center h-16 pt-1 mb-4" onClick={toolBarSetLocalStorage}>
                <img src="https://i.ibb.co/kgRT6Vw/logo-raika.png" width={`${leftBarStatus ? '100px' : '60px'}`} />
            </button>

            {
                leftBarStatus 
                ? (<SlideMenu model={leftMenuItems} className='bg-gray-menus w-44 border-0 rounded-none text-white' viewportHeight={585} easing="ease-in"></SlideMenu>)
                : (<SlideMenu model={leftMenuItemsIcons} className='bg-gray-menus w-20 border-0 rounded-none text-white' viewportHeight={585} easing="ease-in"></SlideMenu>)
            }

        </div>
    )
}
