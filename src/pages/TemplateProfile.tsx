import { CardButton } from '../components';
import { Navbar } from '../components';

export function TemplateProfile() {
  const menuItems = [
    { id: 'settings', title: 'Account Settings', description: 'Manage your account preferences' },
    { id: 'privacy', title: 'Privacy Settings', description: 'Control your privacy and data' },
    { id: 'notifications', title: 'Notifications', description: 'Configure notification preferences' },
    { id: 'help', title: 'Help & Support', description: 'Get help and contact support' },
  ];

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
        
        <div className="space-y-3 pb-6">
          {menuItems.map((item) => (
            <CardButton
              key={item.id}
              to={`/templates/profile/${item.id}`}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

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
