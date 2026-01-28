import { useNavigate } from 'react-router';
import { useNavigation } from '../contexts/NavigationContext';

const discoveries = [
  { id: 'trending', title: 'Trending Topics', icon: '🔥' },
  { id: 'new', title: 'New Releases', icon: '✨' },
  { id: 'popular', title: 'Most Popular', icon: '⭐' },
  { id: 'recommended', title: 'Recommended for You', icon: '💡' },
];

export function Explore() {
  const navigate = useNavigate();
  const { setNavType } = useNavigation();

  const handleDiscoveryClick = (id: string) => {
    setNavType('forward');
    navigate(`/explore/${id}`);
  };

  return (
    <div className="h-full scroll-area">
      <div className="safe-top safe-x">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Explore</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Discover new and interesting content
        </p>
        <div className="grid grid-cols-2 gap-3 pb-6">
          {discoveries.map((discovery) => (
            <button
              key={discovery.id}
              onClick={() => handleDiscoveryClick(discovery.id)}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 active:scale-[0.98] transition-transform flex flex-col items-center text-center"
            >
              <span className="text-4xl mb-3">{discovery.icon}</span>
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                {discovery.title}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
