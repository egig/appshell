import { Navbar } from '../components';

export function StateExample() {
  return (
    <div className="h-full scroll-area">
      <Navbar title="State Management" />
      
      <div className="safe-top safe-x">
        <div className="pt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Navigation State Patterns</h2>
          
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This app demonstrates different state management patterns for navigation and UI state.
            </p>
          </div>

          <div className="space-y-6">
            {/* Navigation State */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Navigation State</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div>• <strong>NavigationContext:</strong> Tracks navigation type (forward, back, tab, modal)</div>
                <div>• <strong>useAppNavigation:</strong> Custom hook for consistent navigation</div>
                <div>• <strong>PageTransition:</strong> Responds to navigation state</div>
                <div>• <strong>Browser History:</strong> Integrates with browser back/forward</div>
              </div>
            </div>

            {/* Component State */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Component State</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div>• <strong>Local State:</strong> useState for component-specific data</div>
                <div>• <strong>Props:</strong> Declarative configuration</div>
                <div>• <strong>Context:</strong> Shared state across components</div>
                <div>• <strong>Custom Hooks:</strong> Encapsulated state logic</div>
              </div>
            </div>

            {/* UI State */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">UI State Patterns</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div>• <strong>Conditional Rendering:</strong> Show/hide based on state</div>
                <div>• <strong>CSS Classes:</strong> Dynamic styling</div>
                <div>• <strong>Animations:</strong> State-driven transitions</div>
                <div>• <strong>Form State:</strong> Controlled components</div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Best Practices</h3>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <pre className="text-xs text-gray-700 dark:text-gray-300">
{`// Keep state close to where it's used
// Use custom hooks for complex logic
// Prefer props over context when possible
// Minimize global state
// Use TypeScript for type safety`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
