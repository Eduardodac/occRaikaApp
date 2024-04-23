import {MenuItem} from "./MenuItem";
import { MenuItemIcon } from "./MenuItemIcon"
import "../assets/iconos/style.css"

export const menuItems = () => {

    const leftMenuItems = [
        {
            template : () => (
                <MenuItem label = 'Curriculum' icon = "icon-ico-reportes" path = "Curriculum"/>
            )
        },
        {
            template : () => (
                <MenuItem label = 'Perfil Interno' icon = "icon-ico-basicos" path = "PerfilInterno"/>
            )
        },
        {
            separator: true
        }
        ,
        {
            template : () => (
                <MenuItem label = 'Cerrar Sesión' icon = "icon-ico-salir" path = ""/>
            )
        },
    ];

    const leftMenuItemsIcons = [
        {
            template : () => (
                <MenuItemIcon icon = "icon-ico-reportes" path = "Curriculum"/>
            )
        },
        {
            template : () => (
                <MenuItemIcon icon = "icon-ico-basicos" path = "PerfilInterno"/>
            )
        },
        {
            separator: true
        }
        ,
        {
            template : () => (
                <MenuItemIcon icon = "icon-ico-salir" path = ""/>
            )
        },
    ];


    return {
        leftMenuItems,
        leftMenuItemsIcons
    }
}
