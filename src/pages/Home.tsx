import { useAppNavigation } from '../hooks/useAppNavigation';

const items = [
  { id: 1, title: 'First Item', description: 'Tap to see details' },
  { id: 2, title: 'Second Item', description: 'Tap to see details' },
  { id: 3, title: 'Third Item', description: 'Tap to see details' },
  { id: 4, title: 'Fourth Item', description: 'Tap to see details' },
  { id: 5, title: 'Fifth Item', description: 'Tap to see details' },
];

export function Home() {
  const { goForward } = useAppNavigation();

  const handleItemClick = (id: number) => {
    goForward(`/home/${id}`);
  };

  return (
    <div className="h-full scroll-area">
      <div className="safe-top safe-x">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Home</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Tap any item below to navigate to its detail page
        </p>
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
