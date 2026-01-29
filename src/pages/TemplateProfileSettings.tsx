import { useParams } from 'react-router';
import { Navbar } from '../components';

const pageData: Record<string, { icon: string; title: string; description: string }> = {
  settings: {
    icon: '⚙️',
    title: 'Account Settings',
    description: 'Manage your app preferences and account configuration',
  },
  notifications: {
    icon: '🔔',
    title: 'Notifications',
    description: 'Control how you receive notifications and alerts',
  },
  privacy: {
    icon: '🔒',
    title: 'Privacy Settings',
    description: 'Manage your privacy and data sharing preferences',
  },
  help: {
    icon: '❓',
    title: 'Help & Support',
    description: 'Get help, FAQs, and contact support',
  }
};

export function TemplateProfileSettings() {
  const { id } = useParams<{ id: string }>();
  const data = pageData[id || ''];

  if (!data) {
    return (
      <div className="h-full scroll-area">
        <Navbar title="Not Found" />
        <div className="safe-top safe-x">
          <div className="pt-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              The settings page you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const settingsOptions = [
    'Push notifications',
    'Email updates',
    'Dark mode',
    'Location services',
    'Data usage',
    'Privacy mode',
  ];

  return (
    <div className="h-full scroll-area">
      <Navbar title={data.title} />
      
      <div className="safe-top safe-x">
        <div className="pt-8">
          <div className="flex items-center mb-6">
            <span className="text-5xl mr-4">{data.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{data.title}</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">{data.description}</p>
            </div>
          </div>

          <div className="space-y-4 pb-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Settings Options
              </h2>
              <div className="space-y-3">
                {settingsOptions.map((option, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300">{option}</span>
                    <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Template Usage
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This settings page template demonstrates:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Toggle switches for settings</li>
                <li>• Organized settings categories</li>
                <li>• Clear visual hierarchy</li>
                <li>• Mobile-friendly touch targets</li>
                <li>• Consistent styling with profile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
