/* eslint-disable no-unused-vars */
import React from 'react';
import LeftSideBar from './LeftSideBar';
import MiddleSideBar from './MiddleSideBar';
import RightSideBar from './RightSideBar';

function Dashboard() {
    return (
        <div className="flex">
            <div className="w-1/4 bg-blue"> 
                <LeftSideBar/>
            </div>
            <div className="w-2/4 bg-gray-100"> 
               <MiddleSideBar />
            </div>
            <div className="w-1/4 bg-light-200"> 
              <RightSideBar />
            </div>
        </div>
    );
}

export default Dashboard;