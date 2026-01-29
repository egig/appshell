import { useParams } from 'react-router';
import { Navbar } from '../components/Navbar';

const categoryData: Record<string, { icon: string; title: string; description: string }> = {
  trending: {
    icon: '🔥',
    title: 'Trending Topics',
    description: 'Discover what\'s hot right now',
  },
  new: {
    icon: '✨',
    title: 'New Releases',
    description: 'Fresh content just for you',
  },
  popular: {
    icon: '⭐',
    title: 'Most Popular',
    description: 'All-time favorites',
  },
  recommended: {
    icon: '💡',
    title: 'Recommended for You',
    description: 'Personalized picks',
  },
};

export function ExploreDetail() {
  const { id } = useParams<{ id: string }>();
  const data = categoryData[id || 'trending'];

  if (!data) {
    return (
      <div className="h-full scroll-area">
        <div className="safe-top safe-x">
          <div className="pt-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Category Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              The category you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full scroll-area">
      <Navbar title={data.title} />
      
      <div className="safe-top safe-x">
        <div className="pt-8">
          <div className="text-center mb-8">
            <span className="text-6xl mb-4 block">{data.icon}</span>
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              {data.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">{data.description}</p>
          </div>

          <div className="space-y-3 pb-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mr-4 flex-shrink-0 flex items-center justify-center text-2xl">
                    {data.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">
                      Item {item}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      This is a sample item in the {data.title.toLowerCase()} category.
                    </p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                      <span className="mr-3">⭐ 4.{8 - item}</span>
                      <span>👁️ {Math.floor(Math.random() * 1000)}k views</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
