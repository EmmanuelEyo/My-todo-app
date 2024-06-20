import React, { useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import AddTaskModal from './AddTaskModal';

interface Task {
  id: number;
  name: string;
  dueDate: string;
  description: string;
  starred: boolean;
  completed: boolean;
}

const MainContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="flex-1 p-6 bg-[#18181C] rounded-3xl relative">
      <h1 className='text-2xl font-semibold mb-5 text-[#8E91D4]'>Tasks</h1>
      <div className="mb-4">
        {tasks.map(task => (
          <div key={task.id} className="p-2 mb-2 bg-[#2F2D36] rounded-lg flex justify-between items-center">
            <div className='flex justify-center items-center'>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => {
                  setTasks(tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t));
                }}
                className="mr-2 custom-checkbox"
              />
              <span className={task.completed ? 'line-through text-[#8E91D4]' : ''}>{task.name}</span>
            </div>
            <FaRegStar
              className={`text-gray-400 ${task.starred ? 'text-purple-400' : ''}`}
              onClick={() => {
                setTasks(tasks.map(t => t.id === task.id ? { ...t, starred: !t.starred } : t));
              }}  
            />
          </div>
        ))}
      </div>
      <button onClick={handleOpenModal} className="absolute bottom-3 md:bottom-8 right-6 md:right-8 px-10 py-2 text-white font-semibold bg-[#754DF7] rounded-full">
        Add Todo
      </button>
      <AddTaskModal isOpen={isModalOpen} onClose={handleCloseModal} addTask={addTask} />
    </div>
  );
};

export default MainContent;




