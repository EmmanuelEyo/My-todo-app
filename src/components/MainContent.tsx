import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 p-6 bg-[#18181C] rounded-3xl">
        <h1 className='text-2xl font-semibold mb-5 text-[#8E91D4]'>Tasks</h1>
      <div className="mb-4">
        <div className="p-4 mb-2 bg-[#2F2D36] rounded-lg flex justify-between items-center">
          Click me to learn more!
          <FaRegStar className="text-gray-400" />
        </div>
        <div className="p-4 mb-2 bg-[#2F2D36] rounded-lg flex justify-between items-center">
          Sidebar Info
          <FaRegStar className="text-gray-400" />
        </div>
      </div>
      <div className="flex justify-end mt-72"><button className="px-10 py-2 text-white font-semibold bg-[#754DF7] rounded-full">Add Task</button></div>
    </div>
  );
};

export default MainContent;

