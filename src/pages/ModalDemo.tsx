import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useNavigation } from '../contexts/NavigationContext';
import { Navbar } from '../components/Navbar';
import { Modal } from '../components/Modal';

const demoItems = [
  { id: 1, title: 'Share Dialog', description: 'Modal for sharing content', type: 'share' },
  { id: 2, title: 'Settings Panel', description: 'Modal with settings options', type: 'settings' },
  { id: 3, title: 'Action Sheet', description: 'Bottom sheet with actions', type: 'actions' },
  { id: 4, title: 'Form Modal', description: 'Modal with form inputs', type: 'form' },
];

export function ModalDemo() {
  const navigate = useNavigate();
  const { setNavType } = useNavigation();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleItemClick = (type: string) => {
    setNavType('modal');
    navigate(`/modal-demo/${type}`, {
      state: { navType: 'modal' }
    });
  };

  const closeModal = () => {
    setActiveModal(null);
    navigate('/modal-demo');
  };

  // Handle modal from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const modalType = urlParams.get('modal') || activeModal;

  const renderModalContent = () => {
    switch (modalType) {
      case 'share':
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Share Content</h3>
            <div className="space-y-3">
              {['Copy Link', 'Share via Email', 'Share to Social Media', 'Send Message'].map((action) => (
                <button
                  key={action}
                  className="w-full text-left p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="text-gray-900 dark:text-white">{action}</span>
                </button>
              ))}
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-900 dark:text-white">Notifications</span>
                <button className="w-12 h-6 bg-blue-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 dark:text-white">Dark Mode</span>
                <button className="w-12 h-6 bg-gray-300 rounded-full relative">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 dark:text-white">Auto-play</span>
                <button className="w-12 h-6 bg-blue-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'actions':
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Actions</h3>
            <div className="space-y-2">
              {[
                { icon: '📷', label: 'Take Photo', color: 'text-blue-600' },
                { icon: '🖼️', label: 'Choose from Library', color: 'text-blue-600' },
                { icon: '📝', label: 'Add Note', color: 'text-gray-900' },
                { icon: '🗑️', label: 'Delete', color: 'text-red-600' },
                { icon: '❌', label: 'Cancel', color: 'text-gray-500' },
              ].map((action) => (
                <button
                  key={action.label}
                  className={`w-full text-left p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-3 ${action.color}`}
                >
                  <span className="text-xl">{action.icon}</span>
                  <span className="font-medium dark:text-white">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
      
      case 'form':
        return (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Add Item</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Enter title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white h-24 resize-none"
                  placeholder="Enter description"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Save
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
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="h-full scroll-area">
      <Navbar title="Modal Demo" />
      
      <div className="safe-top safe-x">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Modal Demo</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Tap any item below to open different types of modal presentations
        </p>
        
        <div className="space-y-3 pb-6">
          {demoItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.type)}
              className="w-full text-left p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 active:scale-[0.98] transition-transform"
            >
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </button>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Modal Navigation</h4>
          <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
            <li>• Tap items to open modals with slide-up animation</li>
            <li>• Tap backdrop or use back button to close</li>
            <li>• Modals support scrollable content</li>
            <li>• Safe area padding for mobile devices</li>
          </ul>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!modalType}
        onClose={closeModal}
        title={modalType ? demoItems.find(item => item.type === modalType)?.title : undefined}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}
