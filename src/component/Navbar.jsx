import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                    >

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                        : "text-gray-800 font-bold text-lg hover:text-blue-500"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/allgames"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                        : "text-gray-800 font-bold text-lg hover:text-blue-500"
                                }
                            >
                                AllGames
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/myprofile"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                        : "text-gray-800 font-bold text-lg hover:text-blue-500"
                                }
                            >
                                My Profile
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <a className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-extrabold text-2xl">
                    GameHub
                </a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="md:flex hidden items-center gap-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold" : "text-gray-800 font-bold text-lg hover:cursor-pointer hover:text-blue-500"}>
                        Home
                    </NavLink>
                    <NavLink to="/allgames" className={({ isActive }) => isActive ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold" : "text-gray-800 font-bold text-lg hover:cursor-pointer hover:text-blue-500"}>
                        AllGames
                    </NavLink>
                    <NavLink to="/myprofile" className={({ isActive }) => isActive ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold" : "text-gray-800 font-bold text-lg hover:cursor-pointer hover:text-blue-500"}>
                        My Profile
                    </NavLink>
                </div>
            </div>
            <div className="navbar-end">
                <a className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white w-20 rounded-lg">Login</a>
            </div>
        </div>
    );
};

export default Navbar;