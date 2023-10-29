import chart from "../assets/chart.png"
import user from "../assets/user.png"
import calendar from "../assets/calendar.png"
import clock from "../assets/clock.png"
import bell from "../assets/bell.png"
import off from "../assets/off.png"
import {MenuItemTemplate} from "./MenuItemTemplate";

export const leftMenuItems = [
    {
        template : () => (
            <MenuItemTemplate label = 'Curriculum' img= {user} path = "Curriculum"/>
        )
    },
    // {
    //     template : () => (
    //         <MenuItemTemplate label = 'Sitio2' img= {user} path = "Sitio2"/>
    //     )
    // },
    // {
    //     template : () => (
    //         <MenuItemTemplate label = 'Sitio3' img= {user}  path = "Sitio3"/>
    //     )
    // },
    // {
    //     template : () => (
    //         <MenuItemTemplate label = 'Sitio4' img= {user} path = "Sitio4"/>
    //     )
    // },
    // {
    //     template : () => (
    //         <MenuItemTemplate label = 'Sitio5' img= {user} path = "Sitio5"/>
    //     )
    // },
    // {
    //     template : () => (
    //         <MenuItemTemplate label = 'Sitio6' img = {bell} path = "Sitio6"/>
    //     )
    // },
    {
        separator: true
    }
    ,
    {
        template : () => (
            <MenuItemTemplate label = 'Cerrar Sesión' img = {off} path = ""/>
        )
    },
];