import { ListView } from '../components/ListView';
import { useNavigate } from 'react-router';

interface Example {
  id: string;
  title: string;
  description: string;
  path: string;
  navType?: string;
}

interface ExampleCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  examples: Example[];
}

const exampleCategories: ExampleCategory[] = [
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
      { id: 'button', title: 'Button & Link', description: 'Navigation-aware buttons', path: '/examples/button-link' },
      { id: 'list-view', title: 'Mobile List View', description: 'Touch-friendly list components', path: '/examples/list-view' }
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
  const navigate = useNavigate();

  const handleExampleClick = (example: Example) => {
    navigate(example.path);
  };

  const renderExampleItem = (item: { id: string; data: Example }) => {
    const example = item.data;
    return (
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-white truncate">
              {example.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 truncate">
              {example.description}
            </p>
          </div>
          <div className="flex-shrink-0 ml-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  const renderQuickAccessItem = (item: { id: string; data: Example }) => {
    const example = item.data;
    return (
      <div className="p-3">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mb-2">
            {example.title.charAt(0)}
          </div>
          <h3 className="font-medium text-gray-900 dark:text-white text-sm">
            {example.title}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            {example.description}
          </p>
        </div>
      </div>
    );
  };

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
              
              <ListView
                items={category.examples.map(example => ({ id: example.id, data: example }))}
                renderItem={renderExampleItem}
                onItemClick={(item) => handleExampleClick(item.data)}
                itemClassName="cursor-pointer hover:border-blue-200 dark:hover:border-blue-800"
              />
            </div>
          ))}
        </div>

        {/* Quick Access */}
        <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Access</h3>
          <ListView
            items={[
              { id: 'modal-demo', data: { id: 'modal-demo', title: '🪟 Modal Demo', description: 'Open modal', path: '/modal-demo', navType: 'modal' }},
              { id: 'form-example', data: { id: 'form-example', title: '📝 Form', description: 'Try form', path: '/form-example' }}
            ]}
            renderItem={renderQuickAccessItem}
            onItemClick={(item) => handleExampleClick(item.data)}
            className="grid grid-cols-2 gap-3"
            itemClassName="cursor-pointer hover:border-blue-200 dark:hover:border-blue-800"
          />
        </div>
      </div>
    </div>
  );
}
