import React from 'react';
import { FaRegStar, FaCalendarDay, FaCalendarWeek, FaFolder, FaGithub } from 'react-icons/fa';
import { MdOutlineFilterList } from 'react-icons/md';

const Sidebar: React.FC = () => {
  return (
    <div className="w-80 p-8 hidden md:block bg-[#18181C] rounded-3xl text-gray-200">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-[#8E91D4] font-semibold">Filters</h2>
          <MdOutlineFilterList className="text-xl" />
        </div>
        <button className="flex items-center w-full p-2 mb-2 bg-[#2F2D36] rounded-lg">
          <FaFolder className="mr-2" /> All
        </button>
        <button className="flex items-center w-full p-2 mb-2 bg-[#2F2D36] rounded-lg">
          <FaRegStar className="mr-2" /> Starred
        </button>
        <button className="flex items-center w-full p-2 mb-2 bg-[#2F2D36] rounded-lg">
          <FaCalendarDay className="mr-2" /> Today
        </button>
        <button className="flex items-center w-full p-2 mb-2 bg-[#2F2D36] rounded-lg">
          <FaCalendarWeek className="mr-2" /> Week
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Projects</h3>
          <button className="text-4xl">+</button>
        </div>
        <button className="flex items-center w-full p-2 mb-2 bg-[#2F2D36] rounded-lg">
          <FaFolder className="mr-2" /> Default
        </button>
      </div>
      <div className="my-44 mx-28 cursor-pointer">
        <FaGithub className="text-2xl" />
      </div>
    </div>
  );
};

export default Sidebar;

