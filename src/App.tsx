import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { HiMenuAlt4 } from "react-icons/hi";
import { TbLetterX } from "react-icons/tb";

interface Project {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'today' | 'week' | 'starred'>('all');
  const [projects, setProjects] = useState<Project[]>([{ id: 1, name: 'Default' }]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openSideBar, setOpenSideBar] = useState(false);

  const addProject = (project: Project) => {
    setProjects([...projects, project]);
  };

  const handleOpenSideBar = () => {
    setOpenSideBar(state => !state);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-[#121215] text-gray-200`}>
      <div className="flex flex-col w-full max-w-[800px] px-4 md:px-0">
        <header className="mb-6 text-left flex justify-between items-center">
          <h1 className={`text-4xl md:text-5xl font-bold ${openSideBar ? 'blur-sm' : ''}`}>todi<span className='text-[#805DF7]'>fy.</span></h1>
          <div onClick={handleOpenSideBar} className='md:hidden'>
            {openSideBar ? (
              ''
            ) : (
              <HiMenuAlt4 className='text-[#8F92D6]' size={35} />
            )}
          </div>
        </header>
        <div className={`flex flex-col md:flex-row h-[70vh] md:h-[550px] gap-x-6 overflow-hidden ${openSideBar ? 'blur-sm' : ''}`}>
          <Sidebar 
            setFilter={setFilter} 
            projects={projects} 
            addProject={addProject} 
            setSelectedProject={setSelectedProject} 
            isModal={false}
          />
          <MainContent filter={filter} selectedProject={selectedProject} projects={projects} />
        </div>
      </div>
      {openSideBar && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center md:hidden">
          <div className="bg-[#18181C] rounded-3xl w-11/12 max-w-md p-6 relative">
            <div className="absolute -top-14 left-72 cursor-pointer" onClick={handleOpenSideBar}>
              <TbLetterX className='text-[#8F92D6]' size={40} />
            </div>
            <Sidebar 
              setFilter={setFilter} 
              projects={projects} 
              addProject={addProject} 
              setSelectedProject={setSelectedProject} 
              isModal={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;








