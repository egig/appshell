import { CardButton, FeatureCard } from '../components';

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
      id: 'examples', 
      title: 'View Examples', 
      description: 'See components and patterns in action',
      icon: '🧪',
      path: '/examples'
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
      id: 'form', 
      title: 'Try Form', 
      description: 'Test mobile-friendly form with all input types',
      icon: '📝',
      path: '/form-example'
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
            <FeatureCard
              icon="🧭"
              title="Navigation"
              description="Tab, Stack, Modal patterns"
              variant="blue"
            />
            <FeatureCard
              icon="✨"
              title="Animations"
              description="Smooth transitions"
              variant="purple"
            />
            <FeatureCard
              icon="📱"
              title="Mobile First"
              description="PWA ready, safe areas"
              variant="green"
            />
            <FeatureCard
              icon="🎨"
              title="Modern UI"
              description="Glassmorphic design"
              variant="orange"
            />
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
