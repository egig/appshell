import { Navbar } from '../components';

export function TemplateContact() {
  return (
    <div className="h-full scroll-area">
      <Navbar title="Contact Template" />
      
      <div className="safe-top safe-x">
        <div className="pt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Form</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This is a reusable contact form template with mobile-friendly design.
          </p>

          <div className="space-y-4 pb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Your message..."
              />
            </div>

            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">
              Send Message
            </button>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Template Features</h3>
            <ul className="text-sm text-green-800 dark:text-green-400 space-y-1">
              <li>• Mobile-optimized form fields</li>
              <li>• Touch-friendly input sizes</li>
              <li>• Dark mode support</li>
              <li>• Validation ready structure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
