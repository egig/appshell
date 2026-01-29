import { useAppNavigation } from '../hooks/useAppNavigation';
import { Navbar } from '../components/Navbar';

export function CustomBackExample() {
  const { goForward } = useAppNavigation();

  const customBackAction = () => {
    alert('Custom back action! Going to special page...');
    goForward('/home');
  };

  return (
    <div className="h-full scroll-area">
      {/* Navbar with custom back action */}
      <Navbar
        title="Custom Back Button"
        customBackAction={customBackAction}
      />

      <div className="safe-top safe-x">
        <div className="pt-8 text-center">
          <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-300 mb-2">
              🎯 The back button in the navbar has a custom action!
            </p>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              Try tapping it - it won't go back, but will navigate to Home instead.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                How it works:
              </h3>
              <ul className="text-left text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Page controls back button visibility via useBackButton hook</li>
                <li>• Custom action overrides default goBack() behavior</li>
                <li>• Cleanup on unmount restores default behavior</li>
                <li>• Back button is now decoupled from layout logic</li>
              </ul>
            </div>
            
            <button
              onClick={() => goForward('/explore')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium active:scale-95 transition-transform"
            >
              Navigate to Explore (Normal Back)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
