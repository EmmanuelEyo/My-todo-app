import React from 'react';
import { FaSmile, FaPaperclip, FaAt } from 'react-icons/fa';

interface AddTaskModalProps {
    isOpen: boolean
    onClose: () => void
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose}) => {
    if(!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#18181C] bg-opacity-50">
      <div className="bg-[#191D20] text-white p-4 sm:p-6 md:p-10 rounded-3xl w-11/12 sm:w-2/3 md:w-1/3 max-w-lg">
        <h2 className="text-xl mb-4">New Todo</h2>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="taskName">todo</label>
          <input
            id="taskName"
            type="text"
            className="w-full p-2 outline-none rounded bg-[#232526] border border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="dueDate">Due date</label>
          <input
            id="dueDate"
            type="date"
            className="w-full p-2 rounded outline-none bg-[#232526] border border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2" htmlFor="taskDescription">description</label>
          <div className="relative">
            <textarea
              id="taskDescription"
              className="w-full p-2 h-36 rounded bg-[#232526] outline-none border border-gray-600 pr-10"
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
          </div>
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded mr-2">
            Cancel
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;


