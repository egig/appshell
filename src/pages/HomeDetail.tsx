import { useParams } from 'react-router';
import { Navbar } from '../components/Navbar';

export function HomeDetail() {
  const { id } = useParams<{ id: string }>();

  const quickActionDetails: Record<string, { title: string; description: string; icon: string; details: string[] }> = {
    explore: {
      title: 'Explore Features',
      description: 'Browse all available features and demos',
      icon: '🔍',
      details: [
        'Comprehensive feature list with categories',
        'Interactive demos for each feature',
        'Status indicators and descriptions',
        'Quick navigation to examples'
      ]
    },
    form: {
      title: 'Form Example',
      description: 'Test mobile-friendly form with all input types',
      icon: '📝',
      details: [
        'All HTML input types included',
        'Mobile-optimized styling',
        'Top navbar with cancel/submit',
        'Touch-friendly interactions'
      ]
    },
    modal: {
      title: 'Modal Demo',
      description: 'Experience different modal presentations',
      icon: '🪟',
      details: [
        'Multiple modal types',
        'Smooth animations',
        'Backdrop interactions',
        'Mobile-optimized design'
      ]
    },
    navbar: {
      title: 'Navbar Examples',
      description: 'See reusable navbar component in action',
      icon: '🎯',
      details: [
        'Reusable navbar component',
        'Custom back actions',
        'Flexible right actions',
        'Auto back button detection'
      ]
    }
  };

  const detail = quickActionDetails[id || ''];

  if (!detail) {
    return (
      <div className="h-full scroll-area">
        <Navbar title="Not Found" />
        <div className="safe-top safe-x">
          <div className="pt-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Action Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              The quick action you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full scroll-area">
      <Navbar title={detail.title} />
      
      <div className="safe-top safe-x">
        <div className="pt-8">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">{detail.icon}</span>
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              {detail.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">{detail.description}</p>
          </div>

          <div className="space-y-4 pb-6">
            <section className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Features
              </h2>
              <ul className="space-y-2">
                {detail.details.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Implementation
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This quick action demonstrates best practices for mobile app development with React.
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <pre className="text-sm text-gray-600 dark:text-gray-400">
                  {`// Built with:
// • React 19 + TypeScript
// • Mobile-first design
// • Modern navigation patterns
// • Glassmorphic UI`}
                </pre>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
