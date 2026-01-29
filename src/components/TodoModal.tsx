import { useState, useEffect } from 'react';
import type { Todo, TodoFormData } from '../types/todo';
import { Modal } from './Modal';

interface TodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TodoFormData) => void;
  editingTodo?: Todo | null;
}

export function TodoModal({ isOpen, onClose, onSubmit, editingTodo }: TodoModalProps) {
  const [formData, setFormData] = useState<TodoFormData>({
    title: '',
    description: '',
  });

  useEffect(() => {
    if (editingTodo) {
      setFormData({
        title: editingTodo.title,
        description: editingTodo.description || '',
      });
    } else {
      setFormData({
        title: '',
        description: '',
      });
    }
  }, [editingTodo, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    
    onSubmit(formData);
    onClose();
    setFormData({ title: '', description: '' });
  };

  const handleInputChange = (field: keyof TodoFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col h-full">
        {/* Header with buttons */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-sm border-b border-gray-200">
          {/* Left: Cancel Button */}
          <div className="w-16 flex justify-start">
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transition-opacity no-select active:scale-95 transition-transform"
              aria-label="Cancel"
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Center: Title */}
          <div className="flex-1 text-center">
            <h2 className="text-lg font-semibold text-gray-900 truncate">
              {editingTodo ? 'Edit Todo' : 'Add Todo'}
            </h2>
          </div>

          {/* Right: Submit Button */}
          <div className="w-16 flex justify-end">
            <button
              type="submit"
              form="todo-form"
              disabled={!formData.title.trim()}
              className="flex items-center justify-center w-10 h-10 bg-blue-600/90 backdrop-blur-sm rounded-full shadow-lg transition-opacity no-select active:scale-95 transition-transform disabled:bg-gray-300 disabled:cursor-not-allowed"
              aria-label={editingTodo ? 'Update' : 'Add'}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form Content */}
        <form id="todo-form" onSubmit={handleSubmit} className="flex-1 p-6 space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleInputChange('title')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter todo title"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleInputChange('description')}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Enter todo description (optional)"
            />
          </div>
        </form>
      </div>
    </Modal>
  );
}
