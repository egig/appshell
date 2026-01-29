import { Navbar } from '../components';
import { Button, Link, CardButton } from '../components';

export function ButtonLinkExample() {
  return (
    <div className="h-full scroll-area">
      <Navbar title="Button & Link Components" />
      
      <div className="safe-top safe-x">
        <div className="pt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Navigation Components</h2>
          
          {/* Button Examples */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Button Component</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Basic navigation button:</p>
                <Button to="/examples" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  Go to Examples
                </Button>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Modal navigation:</p>
                <Button to="/modal-demo" navType="modal" className="px-4 py-2 bg-purple-600 text-white rounded-lg">
                  Open Modal
                </Button>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Tab navigation:</p>
                <Button to="/home" navType="tab" className="px-4 py-2 bg-green-600 text-white rounded-lg">
                  Go to Home
                </Button>
              </div>
            </div>
          </div>

          {/* Link Examples */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Link Component</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Semantic link:</p>
                <Link to="/examples" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Examples Page
                </Link>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Styled link:</p>
                <Link to="/explore" className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
                  Explore Page
                </Link>
              </div>
            </div>
          </div>

          {/* CardButton Examples */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">CardButton Component</h3>
            <div className="space-y-3">
              <CardButton
                to="/home"
                title="Home Page"
                description="Navigate to home"
                icon="🏠"
              />
              <CardButton
                to="/modal-demo"
                navType="modal"
                title="Modal Demo"
                description="Open modal presentation"
                icon="🪟"
              />
            </div>
          </div>

          {/* Code Examples */}
          <div className="pb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Code Examples</h3>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`// Button with navigation
<Button to="/path" navType="forward">
  Navigate
</Button>

// Link with navigation
<Link to="/path" navType="modal">
  Open Modal
</Link>

// CardButton for lists
<CardButton
  to="/detail"
  title="Detail"
  description="View details"
  icon="📄"
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
