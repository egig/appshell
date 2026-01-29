import { Navbar } from '../components';

export function TemplateArticle() {
  return (
    <div className="h-full scroll-area">
      <Navbar title="Article Template" />
      
      <div className="safe-top safe-x">
        <div className="pt-8">
          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Building Modern Mobile Apps with React
            </h1>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <span>By John Doe</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
              <span className="mx-2">•</span>
              <span>Jan 29, 2026</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-6xl">📱</span>
            </div>
          </div>

          {/* Article Content */}
          <article className="space-y-6 pb-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              In today's mobile-first world, building responsive and performant applications is more important than ever. React provides powerful tools for creating amazing mobile experiences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Key Considerations</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When developing mobile apps, consider touch interactions, screen sizes, and performance optimizations. Modern frameworks like React make it easier to create consistent experiences across devices.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Best Practices</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Use responsive design principles</li>
                <li>Optimize for touch interactions</li>
                <li>Implement proper navigation patterns</li>
                <li>Test on real devices</li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This template demonstrates a clean, readable article layout that works great on mobile devices. The typography and spacing are optimized for comfortable reading.
            </p>
          </article>

          {/* Template Info */}
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Template Features</h3>
            <ul className="text-sm text-purple-800 dark:text-purple-400 space-y-1">
              <li>• Responsive typography</li>
              <li>• Mobile-optimized spacing</li>
              <li>• Semantic HTML structure</li>
              <li>• Dark mode support</li>
              <li>• Reading-friendly layout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
