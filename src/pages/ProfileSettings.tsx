import { useParams } from 'react-router';

const pageData: Record<string, { icon: string; title: string; description: string }> = {
  settings: {
    icon: '⚙️',
    title: 'Settings',
    description: 'Manage your app preferences',
  },
  notifications: {
    icon: '🔔',
    title: 'Notifications',
    description: 'Control your notification preferences',
  },
  privacy: {
    icon: '🔒',
    title: 'Privacy',
    description: 'Manage your privacy settings',
  },
  help: {
    icon: '❓',
    title: 'Help & Support',
    description: 'Get help and contact support',
  },
};

export function ProfileSettings() {
  const { id } = useParams<{ id: string }>();
  const data = pageData[id || 'settings'];

  const options = [
    'Push notifications',
    'Email updates',
    'Dark mode',
    'Location services',
    'Data usage',
    'Privacy mode',
  ];

  return (
    <div className="h-full scroll-area">
      <div className="safe-top safe-x">
        <div className="pt-8">
          <div className="flex items-center mb-6">
            <span className="text-5xl mr-4">{data.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{data.title}</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">{data.description}</p>
            </div>
          </div>

          <div className="space-y-3 pb-6">
            {options.map((option, index) => (
              <div
                key={option}
                className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-800 flex items-center justify-between"
              >
                <span className="font-medium text-gray-900 dark:text-white">{option}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked={index % 2 === 0}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              💡 These are sample settings. Toggle switches to see the interactive UI. Use the back
              button to return to your profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
