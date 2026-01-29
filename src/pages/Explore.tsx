import { CardButton, Button } from '../components';

const exploreSections = [
  {
    id: 'features',
    title: 'Feature List',
    description: 'Comprehensive list of all app features and capabilities',
    icon: '🚀',
    path: '/features'
  },
  { 
    id: 'trending', 
    title: 'Trending Topics', 
    description: 'See what\'s hot right now',
    icon: '🔥',
    path: '/explore/trending'
  },
  { 
    id: 'new', 
    title: 'New Releases', 
    description: 'Fresh content just for you',
    icon: '✨',
    path: '/explore/new'
  },
  { 
    id: 'popular', 
    title: 'Most Popular', 
    description: 'All-time favorites',
    icon: '⭐',
    path: '/explore/popular'
  },
  { 
    id: 'recommended', 
    title: 'Recommended', 
    description: 'Personalized picks',
    icon: '💎',
    path: '/explore/recommended'
  },
  { 
    id: 'featured', 
    title: 'Featured Content', 
    description: 'Editor\'s choice',
    icon: '👑',
    path: '/explore/featured'
  }
];

export function Explore() {
  return (
    <div className="h-full scroll-area">
      <div className="safe-top safe-x">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Explore</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Discover features, content, and capabilities of this app skeleton
        </p>
        
        {/* Feature List Section */}
        <div className="mb-6">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">🚀</span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Feature List</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Complete overview of all app features</p>
              </div>
            </div>
            <Button
              to="/features"
              className="w-full mt-3 p-3 bg-blue-600 text-white rounded-lg font-medium active:scale-[0.98] transition-transform"
            >
              View All Features →
            </Button>
          </div>
        </div>
        
        {/* Other Explore Options */}
        <div className="space-y-3 pb-6">
          {exploreSections.slice(1).map((item) => (
            <CardButton
              key={item.id}
              to={item.path}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>

        {/* Demo Actions */}
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Demos</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button
              to="/modal-demo"
              navType="modal"
              className="p-3 bg-purple-600 text-white rounded-lg font-medium active:scale-[0.98] transition-transform text-sm"
            >
              🪟 Modal Demo
            </Button>
            <Button
              to="/form-example"
              className="p-3 bg-green-600 text-white rounded-lg font-medium active:scale-[0.98] transition-transform text-sm"
            >
              📝 Form Example
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
