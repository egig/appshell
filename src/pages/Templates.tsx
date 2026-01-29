import { CardButton } from '../components';

const templateCategories = [
  {
    id: 'user-profiles',
    title: 'User Profiles',
    description: 'Different user profile layouts and components',
    icon: '👤',
    templates: [
      { id: 'profile', title: 'User Profile', description: 'Standard user profile page', path: '/templates/profile' },
      { id: 'settings', title: 'Profile Settings', description: 'User settings and preferences', path: '/templates/profile/settings' }
    ]
  },
  {
    id: 'forms',
    title: 'Form Templates',
    description: 'Various form layouts and input patterns',
    icon: '📝',
    templates: [
      { id: 'contact', title: 'Contact Form', description: 'Contact and feedback forms', path: '/templates/contact' },
      { id: 'survey', title: 'Survey Form', description: 'Survey and questionnaire forms', path: '/templates/survey' },
      { id: 'registration', title: 'Registration', description: 'User registration forms', path: '/templates/registration' }
    ]
  },
  {
    id: 'content',
    title: 'Content Layouts',
    description: 'Different content presentation patterns',
    icon: '📄',
    templates: [
      { id: 'article', title: 'Article Layout', description: 'Blog post and article layouts', path: '/templates/article' },
      { id: 'gallery', title: 'Image Gallery', description: 'Photo and media galleries', path: '/templates/gallery' },
      { id: 'list', title: 'List Views', description: 'Various list and table layouts', path: '/templates/list' }
    ]
  },
  {
    id: 'commerce',
    title: 'E-commerce',
    description: 'Shopping and product display templates',
    icon: '🛒',
    templates: [
      { id: 'product', title: 'Product Page', description: 'Product detail and showcase', path: '/templates/product' },
      { id: 'checkout', title: 'Checkout Flow', description: 'Shopping cart and checkout', path: '/templates/checkout' },
      { id: 'catalog', title: 'Product Catalog', description: 'Product listing and search', path: '/templates/catalog' }
    ]
  }
];

export function Templates() {
  return (
    <div className="h-full scroll-area">
      <div className="safe-top safe-x">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Templates</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Ready-to-use page templates and layouts for common app patterns
        </p>
        
        <div className="space-y-6 pb-6">
          {templateCategories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{category.icon}</span>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 ml-11">
                {category.templates.map((template) => (
                  <CardButton
                    key={template.id}
                    to={template.path}
                    title={template.title}
                    description={template.description}
                    className="text-sm"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Start */}
        <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Start</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Start with the most commonly used templates:
          </p>
          <div className="grid grid-cols-2 gap-3">
            <CardButton
              to="/templates/profile"
              title="👤 Profile"
              description="User profile page"
              className="text-sm"
            />
            <CardButton
              to="/templates/contact"
              title="📝 Contact"
              description="Contact form"
              className="text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
