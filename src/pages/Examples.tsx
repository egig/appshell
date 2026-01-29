import { CardButton } from '../components';

const exampleCategories = [
  {
    id: 'navigation',
    title: 'Navigation Examples',
    description: 'Different navigation patterns and components',
    icon: '🧭',
    examples: [
      { id: 'navbar', title: 'Navbar Component', description: 'Reusable navbar with back button', path: '/examples/navbar' },
      { id: 'custom-back', title: 'Custom Back Button', description: 'Override default back behavior', path: '/examples/custom-back' }
    ]
  },
  {
    id: 'components',
    title: 'UI Components',
    description: 'Reusable UI components and patterns',
    icon: '🎨',
    examples: [
      { id: 'feature-card', title: 'FeatureCard Component', description: 'Customizable feature cards', path: '/examples/feature-card' },
      { id: 'button', title: 'Button & Link', description: 'Navigation-aware buttons', path: '/examples/button-link' }
    ]
  },
  {
    id: 'patterns',
    title: 'App Patterns',
    description: 'Common mobile app patterns',
    icon: '📱',
    examples: [
      { id: 'modal', title: 'Modal Demo', description: 'Modal presentations', path: '/modal-demo' },
      { id: 'form', title: 'Form Example', description: 'Mobile-friendly forms', path: '/form-example' }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Examples',
    description: 'Complex interactions and features',
    icon: '⚡',
    examples: [
      { id: 'animations', title: 'Page Transitions', description: 'Smooth navigation animations', path: '/examples/animations' },
      { id: 'state', title: 'State Management', description: 'Navigation state patterns', path: '/examples/state' }
    ]
  }
];

export function Examples() {
  return (
    <div className="h-full scroll-area">
      <div className="safe-top safe-x">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Examples</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Explore different components, patterns, and features of this app shell
        </p>
        
        <div className="space-y-6 pb-6">
          {exampleCategories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{category.icon}</span>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 ml-11">
                {category.examples.map((example) => (
                  <CardButton
                    key={example.id}
                    to={example.path}
                    title={example.title}
                    description={example.description}
                    className="text-sm"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Access */}
        <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Access</h3>
          <div className="grid grid-cols-2 gap-3">
            <CardButton
              to="/modal-demo"
              navType="modal"
              title="🪟 Modal Demo"
              description="Open modal"
              className="text-sm"
            />
            <CardButton
              to="/form-example"
              title="📝 Form"
              description="Try form"
              className="text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
