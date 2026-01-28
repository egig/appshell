import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useNavigation } from '../contexts/NavigationContext';

const featureCategories = [
  {
    id: 'navigation',
    title: 'Navigation System',
    icon: '🧭',
    description: 'Advanced navigation patterns for mobile apps',
    features: [
      {
        name: 'Tab Navigation',
        description: 'Bottom tab bar with 3 main sections',
        status: 'implemented',
        demo: 'Built-in tabs: Home, Explore, Profile'
      },
      {
        name: 'Stack Navigation',
        description: 'Push/pop navigation between detail pages',
        status: 'implemented',
        demo: 'Tap any item to see detail view'
      },
      {
        name: 'Modal Navigation',
        description: 'Overlay modals with slide-up animation',
        status: 'implemented',
        demo: 'Explore tab → Modal Demo'
      },
      {
        name: 'Navigation Context',
        description: 'Global navigation state management',
        status: 'implemented',
        demo: 'Tracks forward/back/tab/modal types'
      }
    ]
  },
  {
    id: 'animations',
    title: 'Animations & Transitions',
    icon: '✨',
    description: 'Smooth page transitions and micro-interactions',
    features: [
      {
        name: 'Page Transitions',
        description: 'Direction-aware animations based on navigation type',
        status: 'implemented',
        demo: 'Navigate between pages to see animations'
      },
      {
        name: 'Modal Animations',
        description: 'Spring-based slide-up modal presentation',
        status: 'implemented',
        demo: 'Try modal demo for different animation types'
      },
      {
        name: 'Tab Switching',
        description: 'Fade transitions between tabs',
        status: 'implemented',
        demo: 'Switch between Home, Explore, Profile'
      },
      {
        name: 'Button Feedback',
        description: 'Touch-friendly scale animations',
        status: 'implemented',
        demo: 'Tap any button to see feedback'
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Optimizations',
    icon: '📱',
    description: 'Native-like mobile experience',
    features: [
      {
        name: 'Safe Area Support',
        description: 'iOS notch and home indicator handling',
        status: 'implemented',
        demo: 'Test on iPhone with notch'
      },
      {
        name: 'Touch Interactions',
        description: '44px minimum touch targets',
        status: 'implemented',
        demo: 'All buttons are touch-friendly'
      },
      {
        name: 'PWA Support',
        description: 'Progressive Web App capabilities',
        status: 'implemented',
        demo: 'Add to Home Screen on mobile'
      },
      {
        name: 'Rubber-band Prevention',
        description: 'Disable overscroll on iOS',
        status: 'implemented',
        demo: 'Scroll behavior feels native'
      }
    ]
  },
  {
    id: 'forms',
    title: 'Form Components',
    icon: '📝',
    description: 'Mobile-friendly form patterns',
    features: [
      {
        name: 'Form Layout',
        description: 'Top navbar with cancel/submit buttons',
        status: 'implemented',
        demo: 'Profile tab → Form Example'
      },
      {
        name: 'Input Types',
        description: 'All mobile-friendly input types',
        status: 'implemented',
        demo: 'Text, email, number, date, etc.'
      },
      {
        name: 'Toggle Components',
        description: 'Switches, checkboxes, radio buttons',
        status: 'implemented',
        demo: 'Interactive form controls'
      },
      {
        name: 'Validation States',
        description: 'Focus and error state styling',
        status: 'implemented',
        demo: 'Blue focus rings on inputs'
      }
    ]
  },
  {
    id: 'ui',
    title: 'UI Components',
    icon: '🎨',
    description: 'Reusable mobile UI components',
    features: [
      {
        name: 'Tab Bar',
        description: 'Fixed bottom navigation with icons',
        status: 'implemented',
        demo: 'Bottom tab bar with 3 tabs'
      },
      {
        name: 'Back Button',
        description: 'Context-aware back navigation',
        status: 'implemented',
        demo: 'Appears on detail pages automatically'
      },
      {
        name: 'Modal Component',
        description: 'Reusable modal with backdrop',
        status: 'implemented',
        demo: 'Modal demo shows different types'
      },
      {
        name: 'Card Components',
        description: 'Mobile-optimized card layouts',
        status: 'implemented',
        demo: 'List items use card pattern'
      }
    ]
  },
  {
    id: 'themes',
    title: 'Theme & Styling',
    icon: '🌓',
    description: 'Dark mode and responsive design',
    features: [
      {
        name: 'Dark Mode',
        description: 'Complete dark theme support',
        status: 'implemented',
        demo: 'System preference detection'
      },
      {
        name: 'TailwindCSS',
        description: 'Utility-first styling framework',
        status: 'implemented',
        demo: 'Consistent design system'
      },
      {
        name: 'Responsive Design',
        description: 'Mobile-first responsive layout',
        status: 'implemented',
        demo: 'Works on all screen sizes'
      },
      {
        name: 'Custom Utilities',
        description: 'Safe area and scroll utilities',
        status: 'implemented',
        demo: 'CSS custom properties'
      }
    ]
  }
];

export function Features() {
  const navigate = useNavigate();
  const { setNavType } = useNavigation();
  const [expandedCategory, setExpandedCategory] = useState<string | null>('navigation');

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleDemoClick = (demoPath?: string) => {
    if (demoPath) {
      setNavType('forward');
      // Simple navigation based on demo description
      if (demoPath.includes('Modal Demo')) {
        navigate('/modal-demo');
      } else if (demoPath.includes('Form Example')) {
        navigate('/form-example');
      } else if (demoPath.includes('Explore')) {
        navigate('/explore');
      } else if (demoPath.includes('Profile')) {
        navigate('/profile');
      } else if (demoPath.includes('Home')) {
        navigate('/home');
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'implemented':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'planned':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'wip':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="h-full scroll-area">
      <div className="safe-top safe-x">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            🚀 AppShell Features
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Complete mobile app skeleton with advanced navigation and animations
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
            <div className="text-3xl font-bold mb-1">
              {featureCategories.reduce((acc, cat) => acc + cat.features.length, 0)}
            </div>
            <div className="text-sm opacity-90">Total Features</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
            <div className="text-3xl font-bold mb-1">
              {featureCategories.length}
            </div>
            <div className="text-sm opacity-90">Categories</div>
          </div>
        </div>

        {/* Feature Categories */}
        <div className="space-y-4 pb-6">
          {featureCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-4 text-left flex items-center justify-between active:scale-[0.98] transition-transform"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {category.features.length} features
                  </span>
                  <span className="text-gray-400 dark:text-gray-500">
                    {expandedCategory === category.id ? '▼' : '▶'}
                  </span>
                </div>
              </button>

              {expandedCategory === category.id && (
                <div className="border-t border-gray-200 dark:border-gray-800">
                  {category.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`p-4 ${index !== category.features.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {feature.name}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(feature.status)}`}>
                          {feature.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {feature.description}
                      </p>
                      {feature.demo && (
                        <button
                          onClick={() => handleDemoClick(feature.demo)}
                          className="text-sm text-blue-600 dark:text-blue-400 font-medium active:scale-95 transition-transform"
                        >
                          🎯 {feature.demo}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tech Stack Info */}
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🛠️ Tech Stack</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-600 dark:text-gray-400">• React 19 + TypeScript</div>
            <div className="text-gray-600 dark:text-gray-400">• Vite (build tool)</div>
            <div className="text-gray-600 dark:text-gray-400">• React Router 7</div>
            <div className="text-gray-600 dark:text-gray-400">• Framer Motion</div>
            <div className="text-gray-600 dark:text-gray-400">• TailwindCSS</div>
            <div className="text-gray-600 dark:text-gray-400">• ESLint + TypeScript</div>
          </div>
        </div>
      </div>
    </div>
  );
}
