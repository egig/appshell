import { useState } from 'react';
import { Navbar } from '../components';
import { ListView } from '../components/ListView';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';

interface Item {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export function MobileListCRUD() {
  const [items, setItems] = useState<Item[]>([
    {
      id: '1',
      title: 'Mobile App Design',
      description: 'Create responsive mobile app interface',
      status: 'active',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'User Authentication',
      description: 'Implement secure login system',
      status: 'active',
      createdAt: '2024-01-14'
    },
    {
      id: '3',
      title: 'API Integration',
      description: 'Connect backend services',
      status: 'inactive',
      createdAt: '2024-01-13'
    },
    {
      id: '4',
      title: 'Push Notifications',
      description: 'Add real-time notifications',
      status: 'active',
      createdAt: '2024-01-12'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'active' as 'active' | 'inactive'
  });

  const openAddModal = () => {
    setModalMode('add');
    setFormData({ title: '', description: '', status: 'active' });
    setIsModalOpen(true);
  };

  const openEditModal = (item: Item) => {
    setModalMode('edit');
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description,
      status: item.status
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setFormData({ title: '', description: '', status: 'active' });
  };

  const handleSave = () => {
    if (formData.title && formData.description) {
      if (modalMode === 'add') {
        const newItem: Item = {
          id: Date.now().toString(),
          title: formData.title,
          description: formData.description,
          status: formData.status,
          createdAt: new Date().toISOString().split('T')[0]
        };
        setItems([newItem, ...items]);
      } else if (modalMode === 'edit' && editingItem) {
        setItems(items.map(item => 
          item.id === editingItem.id 
            ? { ...item, title: formData.title, description: formData.description, status: formData.status }
            : item
        ));
      }
      closeModal();
    }
  };

  const handleDelete = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const renderItem = (item: { id: string; data: Item }) => {
    const itemData = item.data;

    return (
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                {itemData.title}
              </h3>
              <span className={`px-2 py-1 text-xs rounded-full ${
                itemData.status === 'active' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
              }`}>
                {itemData.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {itemData.description}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Created: {itemData.createdAt}
            </p>
          </div>
          <div className="flex flex-col space-y-1 ml-3">
            <button
              onClick={() => openEditModal(itemData)}
              className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              onClick={() => handleDelete(itemData.id)}
              className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full scroll-area">
      <Navbar 
        title="Mobile List CRUD"
        rightAction={
          <Button
            onClick={openAddModal}
            className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm font-medium"
          >
            + Add
          </Button>
        }
      />
      
      <div className="safe-top safe-x">
        {/* Items List */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Items ({items.length})
            </h2>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Tap to edit, swipe for actions
            </div>
          </div>
          
          {items.length > 0 ? (
            <ListView
              items={items.map(item => ({ id: item.id, data: item }))}
              renderItem={renderItem}
              itemClassName="border border-gray-200 dark:border-gray-800 rounded-lg mb-2 hover:shadow-sm"
            />
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <p>No items yet. Tap "+ Add" to create your first item.</p>
            </div>
          )}
        </div>

        {/* Template Features */}
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Mobile CRUD Features</h3>
          <ul className="text-sm text-purple-800 dark:text-purple-400 space-y-1">
            <li>• Touch-friendly list interface</li>
            <li>• Modal-based editing</li>
            <li>• Swipe gestures support</li>
            <li>• Status indicators</li>
            <li>• Add/Edit/Delete operations</li>
            <li>• Mobile-optimized input sizes</li>
            <li>• Responsive layout</li>
          </ul>
        </div>
      </div>

      {/* Modal for Add/Edit */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalMode === 'add' ? 'Add New Item' : 'Edit Item'}
      >
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Enter title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white h-24 resize-none"
                placeholder="Enter description"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleSave}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                {modalMode === 'add' ? 'Add Item' : 'Update Item'}
              </button>
              <button 
                onClick={closeModal}
                className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
