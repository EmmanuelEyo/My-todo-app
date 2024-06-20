import React, { useState } from 'react';
import { FaSmile, FaPaperclip, FaAt } from 'react-icons/fa';


interface Task {
  id: number;
  name: string;
  dueDate: string;
  description: string;
  starred: boolean;
  completed: boolean;
  projectId: number | null
}

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  addTask: (task: Task) => void;
  projects?: { id: number, name: string }[]
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose, addTask, projects = [] }) => {
  const [name, setName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState<number | null>(projects.length > 0 ? projects[0].id : null)

  const handleSubmit = () => {
    addTask({
      id: Date.now(),
      name,
      dueDate,
      description,
      starred: false,
      completed: false,
      projectId,
    })
    setName('')
    setDueDate('')
    setDescription('')
    onClose()
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#18181C] bg-opacity-50">
      <div className="bg-[#191D20] text-white p-4 sm:p-6 md:p-10 rounded-3xl w-11/12 sm:w-2/3 md:w-1/3 max-w-lg">
        <h2 className="text-xl mb-4">New Todo</h2>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="taskName">Todo</label>
          <input
            id="taskName"
            type="text"
            className="w-full p-2 outline-none rounded bg-[#232526] border border-gray-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="dueDate">Due date</label>
          <input
            id="dueDate"
            type="date"
            className="w-full p-2 rounded outline-none bg-[#232526] border border-gray-600"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="taskDescription">Description</label>
          <div className="relative">
            <textarea
              id="taskDescription"
              className="w-full p-2 h-36 rounded bg-[#232526] outline-none border border-gray-600 pr-10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="absolute top-0 right-0 flex items-center p-2 space-x-2">
              <button className="text-[#47495A] hover:text-white">
                <FaSmile />
              </button>
              <button className="text-[#47495A] hover:text-white">
                <FaPaperclip />
              </button>
              <button className="text-[#47495A] hover:text-white">
                <FaAt />
              </button>
            </div>
            <select value={projectId !== null ? projectId : undefined} onChange={e => setProjectId(Number(e.target.value))} className='w-full bg-gray-800 outline-none p-2 mb-2 border border-gray-700 rounded'>
              {projects.map(project => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded mr-2">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;



