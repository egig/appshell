import { useParams } from 'react-router';

export function HomeDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="h-full scroll-area">
      <div className="safe-top safe-x">
        <div className="pt-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 mb-6 text-white">
            <h1 className="text-4xl font-bold mb-2">Item {id}</h1>
            <p className="text-blue-100">Detail view</p>
          </div>

          <div className="space-y-4 pb-6">
            <section className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                About this item
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This is a detailed view of item {id}. Use the back button in the top-left corner
                to return to the Home tab. Notice how the page slides in from the right when you
                navigate here, and will slide back when you go back.
              </p>
            </section>

            <section className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Features
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Smooth page transitions with Framer Motion</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Automatic back button visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Mobile-friendly touch interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Safe area support for iOS devices</span>
                </li>
              </ul>
            </section>

            <section className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Additional Content
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Scroll down to see more content. The page supports smooth scrolling with momentum
                on mobile devices.
              </p>
              <div className="h-40 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Content area</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
