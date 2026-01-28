import { useNavigate } from 'react-router';
import { useNavigation } from '../contexts/NavigationContext';

const menuItems = [
  { id: 'settings', label: 'Settings', icon: '⚙️' },
  { id: 'notifications', label: 'Notifications', icon: '🔔' },
  { id: 'privacy', label: 'Privacy', icon: '🔒' },
  { id: 'help', label: 'Help & Support', icon: '❓' },
];

export function Profile() {
  const navigate = useNavigate();
  const { setNavType } = useNavigation();

  const handleMenuClick = (id: string) => {
    setNavType('forward');
    navigate(`/profile/${id}`);
  };

  return (
    <div className="h-full scroll-area">
      <div className="safe-top safe-x">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
            👤
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">John Doe</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">john.doe@example.com</p>
        </div>

        <div className="space-y-2 pb-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className="w-full flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 active:scale-[0.98] transition-transform"
            >
              <span className="text-2xl mr-4">{item.icon}</span>
              <span className="flex-1 text-left font-medium text-gray-900 dark:text-white">
                {item.label}
              </span>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
