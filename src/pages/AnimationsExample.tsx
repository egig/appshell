import { Navbar } from '../components';
import { Button } from '../components';

export function AnimationsExample() {
  return (
    <div className="h-full scroll-area">
      <Navbar title="Page Transitions" />
      
      <div className="safe-top safe-x">
        <div className="pt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Navigation Animations</h2>
          
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This app uses Framer Motion for smooth page transitions. Try navigating between different pages to see the animations in action.
            </p>
          </div>

          <div className="space-y-6">
            {/* Animation Types */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Animation Types</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div>• <strong>Forward:</strong> Slide in from right</div>
                <div>• <strong>Back:</strong> Slide in from left</div>
                <div>• <strong>Tab:</strong> Fade transition</div>
                <div>• <strong>Modal:</strong> Slide up from bottom</div>
              </div>
            </div>

            {/* Test Navigation */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Test Animations</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button to="/home" navType="tab" className="px-3 py-2 bg-blue-600 text-white rounded text-sm">
                  Tab Animation
                </Button>
                <Button to="/explore" className="px-3 py-2 bg-green-600 text-white rounded text-sm">
                  Forward Animation
                </Button>
                <Button to="/modal-demo" navType="modal" className="px-3 py-2 bg-purple-600 text-white rounded text-sm">
                  Modal Animation
                </Button>
                <Button to="/examples" className="px-3 py-2 bg-orange-600 text-white rounded text-sm">
                  Forward Animation
                </Button>
              </div>
            </div>

            {/* Implementation Details */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Implementation</h3>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <pre className="text-xs text-gray-700 dark:text-gray-300">
{`// PageTransition component handles animations
// NavigationContext tracks navType
// Framer Motion provides smooth transitions
// Each navigation type has unique animation`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
