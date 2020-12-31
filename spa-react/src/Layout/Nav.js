import React from 'react';
import { NavLink } from "react-router-dom";

const navs = [
    { path: '/', name: 'Home' },
    { path: '/about', name:'about' },
    { path: '/contact', name:'contact' }
]

const Nav = () => (
    <nav id="header">
        <ul id="links">
            {navs.map (navItem => (
            <li>
                <NavLink exact to={navItem.path}>
                    {navItem.name}
                </NavLink>
            </li>
            ))}           
        </ul>
    </nav>
);

export default Nav;