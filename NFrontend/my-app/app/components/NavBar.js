import React, { memo, useEffect, useState } from 'react';
import { FaSearch, FaArrowDown, FaTimes } from 'react-icons/fa';
import NavProfile from './NavbarComp/NavProfile';
import { FaBars } from 'react-icons/fa'


function NavBar({ toggleSidebar, showSidebar }) {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const nav = document.querySelector('.navbarclass');
        
        const sidebarbg = document.querySelector('.sidebarbg');
        
        
        // sidebarbg


        if (isDarkMode) {
            nav.classList.add('dark');
            sidebarbg.classList.add('dark');

        } else {
            nav.classList.remove('dark');
            sidebarbg.classList.remove('dark');
        }
    }, [isDarkMode]);


    return (
        <div className={`navbarclass bg-gray-100 p-4 flex justify-between items-center ${dark ? 'dark' : ''}`}>


            <div className="w-1/4 flex items-center">
                <img
                    className="h-8"
                    src="https://via.placeholder.com/48x48?text=Logo"
                    alt="Logo"
                />
                {/* <ul className="flex space-x-4 ml-4">
                    <a href="/">
                        <li className="text-gray-700 cursor-pointer hover:text-gray-900">
                            Menu Item 1
                        </li>
                    </a>
                    <a href="/">
                        <li className="text-gray-700 cursor-pointer hover:text-gray-900">
                            Menu Item 2
                        </li>
                    </a>

                </ul> */}
            </div>

            {/* Middle search bar */}
            <div className="w-1/2 flex items-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 rounded-lg border-gray-300 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-gray-200 hover:bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center">

                    <FaSearch />
                </button>
            </div>

            <NavProfile />

            <button
                className="bg-gray-200 m-4 hover:bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center mr-4"
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                {isDarkMode ? '🌙' : '☀️'}
            </button>


            <button className="text-gray-600 focus:outline-none " onClick={toggleSidebar}>
                {showSidebar ? <FaTimes /> : <FaBars />}
            </button>



        </div>
    );
}

export default memo(NavBar);


