import { ListView } from '../components/ListView';
import { Navbar } from '../components';
import { useNavigate } from 'react-router';

export function TemplateProfile() {
  const navigate = useNavigate();
  
  const menuItems = [
    { id: 'settings', title: 'Account Settings', description: 'Manage your account preferences' },
    { id: 'privacy', title: 'Privacy Settings', description: 'Control your privacy and data' },
    { id: 'notifications', title: 'Notifications', description: 'Configure notification preferences' },
    { id: 'help', title: 'Help & Support', description: 'Get help and contact support' },
  ];

  const handleMenuClick = (item: typeof menuItems[0]) => {
    navigate(`/templates/profile/${item.id}`);
  };

  const renderMenuItem = (item: { id: string; data: typeof menuItems[0] }) => {
    const menuItem = item.data;
    return (
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-white truncate">
              {menuItem.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 truncate">
              {menuItem.description}
            </p>
          </div>
          <div className="flex-shrink-0 ml-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full scroll-area">
      <Navbar title="Profile Template" />
      
      <div className="safe-top safe-x">
        {/* User Info */}
        <div className="flex items-center space-x-4 mb-6 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-2xl text-white font-bold">JD</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">John Doe</h2>
            <p className="text-gray-600 dark:text-gray-400">john.doe@example.com</p>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          This is a reusable user profile template. Tap any item below to see the detail page template.
        </p>
        
        <ListView
          items={menuItems.map(item => ({ id: item.id, data: item }))}
          renderItem={renderMenuItem}
          onItemClick={(item) => handleMenuClick(item.data)}
          itemClassName="cursor-pointer hover:border-blue-200 dark:hover:border-blue-800"
        />

        {/* Template Info */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Template Features</h3>
          <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
            <li>• Responsive user avatar</li>
            <li>• Navigation menu items</li>
            <li>• Detail page navigation</li>
            <li>• Mobile-optimized layout</li>
            <li>• Dark mode support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
