import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import search_icon from '../assets/search_icon.svg';
import bell_icon from '../assets/bell_icon.svg';
import profile_img from '../assets/profile_img.png';
import caret_icon from '../assets/caret_icon.svg';

function Navbar() {
    return (
        //fixed top-0 left-0 right-0 z-10 flex items-center justify-between w-full px-4 py-6 bg-black md:px-16">
        <nav className="flex justify-between p-6 font-semibold shadow-2xl ">
            {/* Logo */}
            <Link to={'/'} className="cursor-pointer">
                <img className="w-44 sm:w-56" src={logo} alt="Logo" />
            </Link>

            {/* Navigation Links */}
            <ul className="items-center hidden font-medium text-white md:flex md:gap-7 ">
                <Link to={'/'}> <li className="py-2 capitalize duration-500 ease-out rounded-md cursor-pointer hover:text-red-700 hover:bg-slate-400 hover:font-bold hover:px-5 hover:scale-105">Home</li></Link>
                <li className="py-2 capitalize duration-500 ease-out rounded-md cursor-pointer hover:text-red-700 hover:bg-slate-400 hover:font-bold hover:px-5 hover:scale-105">TV Shows</li>
                <li className="py-2 capitalize duration-500 ease-out rounded-md cursor-pointer hover:text-red-700 hover:bg-slate-400 hover:font-bold hover:px-5 hover:scale-105">New & Popular</li>
                <li className="py-2 capitalize duration-500 ease-out rounded-md cursor-pointer hover:text-red-700 hover:bg-slate-400 hover:font-bold hover:px-5 hover:scale-105">My List</li>
                <li className="py-2 capitalize duration-500 ease-out rounded-md cursor-pointer hover:text-red-700 hover:bg-slate-400 hover:font-bold hover:px-5 hover:scale-105">Browse by Language</li>
            </ul>

            {/* User Actions */}
            <div className="flex items-center gap-6">
                {/* Search */}
                <img src={search_icon} alt="Search" className="w-6 h-6 transition-transform cursor-pointer hover:scale-110" />

                {/* Children Text */}
                <p className="hidden py-1 font-medium text-gray-600 duration-500 ease-out rounded cursor-pointer sm:block hover:text-red-700 hover:bg-slate-400 hover:font-bold hover:px-5 hover:scale-105">Children</p>

                {/* Notifications */}
                <img src={bell_icon} alt="Notifications" className="w-6 h-6 transition-transform cursor-pointer hover:scale-110" />

                {/* Profile Dropdown */}
                <Link to={'/login'}>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img src={profile_img} alt="Profile" className="w-8 h-8 rounded-full" />
                        <img src={caret_icon} alt="Dropdown" className="w-4 h-4" />
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
