import { NavLink } from 'react-router-dom'

interface ItemProps {
    icon?: string,
    path: string,
    img?: string
}

export const MenuItemIcon = ({
    icon = 'pi pi home',
    path = '',
    img,
}: ItemProps) => {
    return (
        <div className='flex mx-4 my-2 '>
            {
                icon != 'icon-ico-salir'
                    ? (<NavLink
                        className={({ isActive }) => {
                            return `w-12 ${isActive ? 'active' : ''} `
                        }}
                        to={`/${path}`}
                    >
                        {img != null
                            ? (<div className='py-3 pl-3'><img src={img} alt={path} className="h-5 w-5 opacity-60" /></div>)
                            : (<i className={`${icon} py-3 pl-4 text-base`}></i>)}

                    </NavLink>)
                    : (<button className=''>{img != null
                        ? (<div className='py-3 pl-3'><img src={img} alt={path} className="h-5 w-5 opacity-60" /></div>)
                        : (<i className={`${icon} py-3 pl-4 text-base`}></i>)}</button>)
            }

        </div>
    )
}