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
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {editingTodo ? 'Edit Todo' : 'Add New Todo'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={!formData.title.trim()}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {editingTodo ? 'Update' : 'Add'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
