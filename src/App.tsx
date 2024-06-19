import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#121215] text-gray-200">
        <div className="flex w-[800px] h-[550px] gap-x-6 overflow-hidden">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
