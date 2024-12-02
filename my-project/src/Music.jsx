/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDownload = () => {
    // Implement download logic here
    alert('Download option clicked');
  };

  const handleMore = () => {
    // Implement more option logic here
    alert('More option clicked');
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button to toggle the dropdown */}
      <button onClick={toggleDropdown} className="p-2 rounded-full hover:bg-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12 12a.75.75 0 100-1.5.75.75 0 000 1.5zM12 17.25a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="py-1">
            <button
              onClick={handleDownload}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Download
            </button>
            <button
              onClick={handleMore}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
