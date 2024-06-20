import React, { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import AddTaskModal from './AddTaskModal';

interface Task {
  id: number;
  name: string;
  dueDate: string;
  description: string;
  starred: boolean;
  completed: boolean;
  projectId: number | null
}

interface MainContentProps {
  filter: 'all' | 'today' | 'week' | 'starred'
  selectedProject: { id: number, name: string } | null
  projects: { id: number, name: string }[]
}

const MainContent: React.FC<MainContentProps> = ({ filter, selectedProject, projects }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  useEffect(() => {
    const filterTask = () => {
      const today = new Date()
      const endOfWeek = new Date(today)
      endOfWeek.setDate(today.getDate() + 7)

      let filtered = tasks

      if(selectedProject) {
        filtered = filtered.filter(task => task.projectId === selectedProject.id)
      }
  
      switch(filter) {
        case 'today':
          setFilteredTasks(filtered.filter(task => new Date(task.dueDate).toDateString() === today.toDateString()))
          break
        case 'week':
          setFilteredTasks(filtered.filter(task => {
            const dueDate = new Date(task.dueDate)
            return dueDate >= today && dueDate <= endOfWeek
          }))
          break
        case 'starred':
          setFilteredTasks(filtered.filter(task => task.starred))
          break
        default:
          setFilteredTasks(tasks)
          break
      }
    }
    filterTask()
  }, [tasks, filter, selectedProject])

  return (
    <div className="flex-1 p-6 bg-[#18181C] rounded-3xl relative">
      <h1 className='text-2xl font-semibold mb-5 text-[#8E91D4]'>Tasks</h1>
      <div className="mb-4">
        {filteredTasks.map(task => (
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
      <button onClick={handleOpenModal} className="absolute bottom-7 md:bottom-8 right-6 md:right-8 px-10 py-2 text-white font-semibold bg-[#754DF7] rounded-full">
        Add Todo
      </button>
      <AddTaskModal isOpen={isModalOpen} onClose={handleCloseModal} addTask={addTask} projects={projects} />
    </div>
  );
};

export default MainContent;




