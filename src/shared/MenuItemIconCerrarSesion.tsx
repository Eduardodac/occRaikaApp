import { NavLink } from 'react-router-dom'
import { useAuthStore } from '../store/authStore';

interface ItemProps {
    icon?: string,
    path: string,
    img?: string
}

export const MenuItemIconCerrarSesion = ({
    icon = 'pi pi home',
    path = '',
    img,
}: ItemProps) => {
    const {setJWT} = useAuthStore();

    const cerrarSesion = ()=>{
        console.log("click");
        setJWT(null);
    }
    return (
        <div className='flex mx-4 my-2 h-12'>
            {
                icon != 'icon-ico-salir'
                    ? (<NavLink
                        onClick={()=>cerrarSesion()}
                        className={({ isActive }) => {
                            return `w-12 ${isActive ? 'active' : ''} `
                        }}
                        to={`/${path}`}
                    >
                        {img != null
                            ? (<div className='py-3 pl-3'><img src={img} alt={path} className="h-5 w-5 opacity-60" /></div>)
                            : (<i className={`${icon} py-3 pl-4 text-base`}></i>)}

                    </NavLink>)
                    : (<button className=''>
                        {img != null
                            ? (<div className='py-3 pl-3'><img src={img} alt={path} className="h-5 w-5 opacity-60" /></div>)
                            : (<i className={`${icon} py-3 pl-4 text-base`}></i>)}
                    </button>)
            }

        </div>
    )
}