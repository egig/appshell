import { Navbar } from '../components/Navbar';

export function NavbarExample() {
  return (
    <div className="h-full scroll-area">
      {/* Basic Navbar */}
      <Navbar title="Basic Navbar" />

      <div className="safe-top safe-x">
        <div className="pt-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Reusable Navbar Component
          </h2>
          
          <div className="space-y-6">
            {/* Example 1: Basic Navbar */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Basic Usage
              </h3>
              <pre className="text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded text-gray-700 dark:text-gray-300">
{`<Navbar title="Page Title" />`}
              </pre>
            </div>

            {/* Example 2: Custom Actions */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                With Custom Actions
              </h3>
              <pre className="text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded text-gray-700 dark:text-gray-300">
{`<Navbar 
  title="Form"
  rightAction={<button>Save</button>}
/>`}
              </pre>
            </div>

            {/* Example 3: Custom Back Action */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Custom Back Action
              </h3>
              <pre className="text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded text-gray-700 dark:text-gray-300">
{`<Navbar 
  title="Custom"
  customBackAction={() => navigate('/special')}
/>`}
              </pre>
            </div>

            {/* Example 4: Hide Back Button */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Hide Back Button
              </h3>
              <pre className="text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded text-gray-700 dark:text-gray-300">
{`<Navbar 
  title="Root Page"
  showBackButton={false}
/>`}
              </pre>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                🎯 Benefits
              </h4>
              <ul className="text-left text-blue-800 dark:text-blue-400 space-y-1 text-sm">
                <li>• Reusable across all pages</li>
                <li>• Auto-detects when to show back button</li>
                <li>• Supports custom actions</li>
                <li>• Clean separation of concerns</li>
                <li>• No global state needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
