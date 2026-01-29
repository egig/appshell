import { CardButton } from '../components';

export function Home() {
  const quickActions = [
    { 
      id: 'explore', 
      title: 'Explore Features', 
      description: 'Browse all available features and demos',
      icon: '🔍',
      path: '/home/explore'
    },
    { 
      id: 'form', 
      title: 'Try Form', 
      description: 'Test mobile-friendly form with all input types',
      icon: '📝',
      path: '/home/form'
    },
    { 
      id: 'modal', 
      title: 'Modal Demo', 
      description: 'Experience different modal presentations',
      icon: '🪟',
      path: '/modal-demo',
      navType: 'modal' as const
    },
    { 
      id: 'navbar', 
      title: 'Navbar Examples', 
      description: 'See reusable navbar component in action',
      icon: '🎯',
      path: '/navbar-example'
    }
  ];

  return (
    <div className="h-full scroll-area">
      <div className="safe-top safe-x">
        {/* Hero Section */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            App Shell
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Mobile-first React app skeleton with advanced navigation patterns
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <span className="text-blue-800 dark:text-blue-300 font-medium">React 19 + TypeScript + Vite</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Quick Start</h2>
          <div className="grid grid-cols-1 gap-4">
            {quickActions.map((action) => (
              <CardButton
                key={action.id}
                to={action.path}
                navType={action.navType || 'forward'}
                title={action.title}
                description={action.description}
                icon={action.icon}
              />
            ))}
          </div>
        </div>

        {/* Features Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Key Features</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <span className="text-2xl mb-2 block">🧭</span>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Navigation</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Tab, Stack, Modal patterns</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <span className="text-2xl mb-2 block">✨</span>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Animations</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Smooth transitions</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-800">
              <span className="text-2xl mb-2 block">📱</span>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Mobile First</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">PWA ready, safe areas</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <span className="text-2xl mb-2 block">🎨</span>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Modern UI</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">Glassmorphic design</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="pb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {['React 19', 'TypeScript', 'Vite', 'TailwindCSS', 'Framer Motion', 'React Router'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
