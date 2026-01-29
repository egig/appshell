import { useAppNavigation } from '../hooks/useAppNavigation';

const items = [
  { id: 'trending', title: 'Trending Topics', description: 'See what\'s hot right now' },
  { id: 'new', title: 'New Releases', description: 'Fresh content just for you' },
  { id: 'popular', title: 'Most Popular', description: 'All-time favorites' },
  { id: 'recommended', title: 'Recommended', description: 'Personalized picks' },
  { id: 'featured', title: 'Featured Content', description: 'Editor\'s choice' },
];

export function Explore() {
  const { goForward, openModal } = useAppNavigation();

  const handleItemClick = (id: string) => {
    goForward(`/explore/${id}`);
  };

  const handleModalDemo = () => {
    openModal('/modal-demo');
  };

  return (
    <div className="h-full scroll-area">
      <div className="safe-top safe-x">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Explore</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Tap any item below to navigate to its detail page
        </p>
        
        {/* Modal Demo Button */}
        <button
          onClick={handleModalDemo}
          className="w-full mb-6 p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-sm font-medium active:scale-[0.98] transition-transform"
        >
          🎭 Try Modal Navigation Demo
        </button>
        
        <div className="space-y-3 pb-6">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="w-full text-left p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 active:scale-[0.98] transition-transform"
            >
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
