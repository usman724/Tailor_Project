import React, { useState } from 'react';
import { FaHome, FaBriefcase,FaUserAlt, FaTimes, FaBars, FaTasks, FaUserFriends, FaSignOutAlt, FaUser } from 'react-icons/fa'

import { BrowserRouter,Routes,Link,NavLink, Route } from 'react-router-dom';



function Sidebar({ toggleSidebar, showSidebar }) {



    return (

        <div  style={{ height: "90vh" ,width:"300px" }} className="flex flex-row ">


            <div  className={`flex sidebarbg flex-col w-80  bg-gray-100 ${showSidebar ? 'block' : 'hidden'}`}>

                <div className="flex flex-col items-center justify-center h-60 ">
                    <div className="flex flex-col items-center justify-center mt-6">
                        <img className="w-15 h-15 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Profile" />
                        <h2 className="text-lg font-bold text-gray-800 mt-2">John Doe</h2>
                    </div>

                    <div className=" flex ">
                        <p className="text-md font-medium text-gray-500 ">Designation: </p>
                        <p className="text-md font-medium text-gray-800 ml-2">Developer</p>
                    </div>
                </div>


                <div className="w-full flex flex-col items-start justify-start flex-1">


                    <nav className='w-full mt-5 flex'>
                        <ul className="flex flex-col items-start justify-start flex-1 space-y-2 px-4 py-2">
                            <li className='hover:bg-gray-200 w-full'>
                                <NavLink to="/dashboard" className="flex block p-2 text-sm font-medium hover:text-gray-600">
                                    <FaHome className="w-5 h-5 mr-2" />
                                    Dashboard
                                </NavLink>
                            </li>
                            {/* <li className='hover:bg-gray-200 w-full'>
                                <a href="#" className="flex block p-2 text-sm font-medium hover:text-gray-600">
                                    <FaBriefcase className="w-5 h-5 mr-2" />
                                    Projects
                                </a>
                            </li>
                            <li className='hover:bg-gray-200 w-full'>
                                <a href="#" className="flex block p-2 text-sm font-medium hover:text-gray-600">
                                    <FaTasks className="w-5 h-5 mr-2" />
                                    Tasks
                                </a>
                            </li> */}

                            <li className='hover:bg-gray-200 w-full'>
                                <NavLink to="/profile" className="flex block p-2 text-sm font-medium hover:text-gray-600">
                                    <FaUserAlt className="w-5 h-5 mr-2" />
                                    Profile
                                </NavLink>
                            </li>

                            {/* <li className='hover:bg-gray-200 w-full'>
                                <a href="#"
                                    className="flex block p-2 text-sm font-medium hover:text-gray-600">
                                    <FaUserFriends className="w-5 h-5 mr-2" />
                                    Users
                                </a>
                            </li> */}
                        </ul>
                    </nav>
                </div>


                <div className="flex items-center justify-center h-20 ">
                    <div className="flex font-medium text-gray-800">
                        <FaSignOutAlt className="w-6 h-6 mr-2" />
                        Logout
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
