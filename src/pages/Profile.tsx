import { useNavigate } from 'react-router';
import { useNavigation } from '../contexts/NavigationContext';

const menuItems = [
  { id: 'settings', title: 'Account Settings', description: 'Manage your account preferences' },
  { id: 'privacy', title: 'Privacy Settings', description: 'Control your privacy and data' },
  { id: 'notifications', title: 'Notifications', description: 'Configure notification preferences' },
  { id: 'help', title: 'Help & Support', description: 'Get help and contact support' },
];

export function Profile() {
  const navigate = useNavigate();
  const { setNavType } = useNavigation();

  const handleItemClick = (id: string) => {
    setNavType('forward');
    navigate(`/profile/${id}`);
  };

  const handleFormExample = () => {
    setNavType('forward');
    navigate('/form-example');
  };

  return (
    <div className="h-full scroll-area">
      <div className="safe-top safe-x">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Profile</h1>
        
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
        
        {/* Form Example Button */}
        <button
          onClick={handleFormExample}
          className="w-full mb-6 p-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg shadow-sm font-medium active:scale-[0.98] transition-transform"
        >
          📝 Try Form Example
        </button>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Tap any item below to navigate to its detail page
        </p>
        
        <div className="space-y-3 pb-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="w-full text-left p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 active:scale-[0.98] transition-transform"
            >
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
