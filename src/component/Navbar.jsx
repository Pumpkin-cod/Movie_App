/* eslint-disable no-unused-vars */
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-black py-4 px-6">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white text-xl">Dashboard</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">Movies</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">TV-Series</a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">Reviews</a>
                    </li>
                </ul>

                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-2 rounded-md mr-4 focus:outline-none"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                        Search
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
