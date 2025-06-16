import React from 'react';
import { BsCart3 } from "react-icons/bs";
import { BsHeart } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    const links = <>
        <li ><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='Statistics'>Statistics</NavLink></li>
        <li><NavLink to='Dashboard'>Dashboard</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100  bg-sky-400  rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to='/' className="btn btn-ghost text-xl">Gadget Heaven</NavLink>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="flex gap-4 navbar-end text-black">

                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <NavLink to=''> <BsCart3 className="text-xl" /> </NavLink>

                </div>


                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">

                    <NavLink to=''> <BsHeart className="text-xl" /> </NavLink>
                </div>
            </div>

        </div>
    );
};

export default NavBar;