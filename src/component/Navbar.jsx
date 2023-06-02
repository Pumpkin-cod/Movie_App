/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onSearchHandler = () => {
        onSearch(searchQuery);
    };

    const onSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <nav className="bg-black py-4 px-6">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white text-xl">Dashboard</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">
                            Movies
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">
                            TV-Series
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">
                            Reviews
                        </a>
                    </li>
                </ul>

                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={onSearchInputChange}
                        className="px-4 py-2 rounded-md mr-4 focus:outline-none"
                    />
                    <button
                        className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-md border border-white"
                        onClick={onSearchHandler}
                    >
                        Search
                    </button>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default Navbar;
