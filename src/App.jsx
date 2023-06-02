/* eslint-disable no-unused-vars */
import React from 'react';
import Dashboard from './component/Dashboard';
import Navbar from './component/Navbar';
import Review from './Review';

const App = () => {
  return (
    <div className="w-full flex flex-wrap">
      {/* <Dashboard /> */}
      <div className="grid grid-cols-3 gap-4">
        <Review />
      </div>
    </div>
  );
};

export default App;
