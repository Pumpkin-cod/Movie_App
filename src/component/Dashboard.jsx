/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './Navbar';
import LeftSideBar from './LeftSideBar';
import MiddleSideBar from './MiddleSideBar';
import RightSideBar from './RightSideBar';

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <>
            <Navbar onSearch={handleSearch} />
            <div className="flex">
                <div className="w-1/4 bg-blue">
                    <LeftSideBar />
                </div>
                <div className="w-2/4 bg-slate-600">
                    <MiddleSideBar searchQuery={searchQuery.toString()} />
                </div>
                <div className="w-1/4 bg-light-200">
                    <RightSideBar />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
