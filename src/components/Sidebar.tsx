import React, { useState } from 'react';
import { FaRegStar, FaCalendarDay, FaCalendarWeek, FaFolder, FaGithub } from 'react-icons/fa';
import { MdOutlineFilterList } from 'react-icons/md';

interface SidebarProps {
  setFilter: (filter: 'all' | 'today' | 'week' | 'starred') => void;
  projects: { id: number; name: string }[];
  addProject: (project: { id: number; name: string }) => void;
  setSelectedProject: (project: { id: number; name: string } | null) => void;
  isModal: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ setFilter, projects, addProject, setSelectedProject, isModal }) => {
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddProject = () => {
    if (newProjectName) {
      addProject({ id: Date.now(), name: newProjectName });
      setNewProjectName('');
    }
  };

  return (
    <div className={`w-full ${isModal ? 'block' : 'hidden'} md:block md:w-80 p-4 md:p-8 bg-[#18181C] rounded-3xl text-gray-200 ${isModal ? 'relative' : ''}`}>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-[#8E91D4] font-semibold">Filters</h2>
          <MdOutlineFilterList className="text-xl" />
        </div>
        <button onClick={() => setFilter('all')} className="flex items-center w-full p-2 mb-2 bg-[#2F2D36] rounded-lg">
          <FaFolder className="mr-2" /> All
        </button>
        <button onClick={() => setFilter('starred')} className="flex items-center w-full p-2 mb-2 bg-[#2F2D36] rounded-lg">
          <FaRegStar className="mr-2" /> Starred
        </button>
        <button onClick={() => setFilter('today')} className="flex items-center w-full p-2 mb-2 bg-[#2F2D36] rounded-lg">
          <FaCalendarDay className="mr-2" /> Today
        </button>
        <button onClick={() => setFilter('week')} className="flex items-center w-full p-2 mb-2 bg-[#2F2D36] rounded-lg">
          <FaCalendarWeek className="mr-2" /> Week
        </button>
      </div>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Projects</h3>
          <button onClick={handleAddProject} className="text-4xl">+</button>
        </div>
        {projects.map(project => (
          <button key={project.id} onClick={() => setSelectedProject(project)} className="flex items-center w-full p-2 mb-2 bg-[#2F2D36] rounded-lg">
            <FaFolder className="mr-2" /> {project.name}
          </button>
        ))}
        <input type='text' value={newProjectName} onChange={e => setNewProjectName(e.target.value)} placeholder='New Project' className='w-full outline-none p-2 border border-gray-600 rounded-lg bg-[#232526]' />
      </div>
      <div className="cursor-pointer mt-8 md:mt-16 flex justify-center md:mx-28">
        <FaGithub className="text-2xl" />
      </div>
    </div>
  );
};

export default Sidebar;




// mt-8 md:mt-16 mx-auto md:mx-28


