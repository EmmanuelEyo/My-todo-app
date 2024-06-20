import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent'
import { HiMenuAlt4 } from "react-icons/hi";
import './App.css'

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121215] text-gray-200">
      <div className="flex flex-col w-full max-w-[800px] px-4 md:px-0">
        <header className="mb-6 text-left flex justify-between items-center">
          <h1 className="text-4xl md:text-5xl font-bold">todi<span className='text-[#805DF7]'>fy.</span></h1>
          <div className='md:hidden'>
            <HiMenuAlt4 className='text-[#8F92D6]' size={35} />
          </div>
        </header>
        <div className="flex flex-col md:flex-row h-full md:h-[550px] gap-x-6 overflow-hidden">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;



