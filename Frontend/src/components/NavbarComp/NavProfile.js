import React, { useState } from 'react'
import {  FaArrowDown } from 'react-icons/fa';

function NavProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-1/4 flex justify-end items-center">
  
      <div className="relative">
        <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out" onClick={toggleDropdown}>
          <span className="sr-only">User Menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Profile"
          />
        </button>

        {/* User dropdown menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Logout
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavProfile
