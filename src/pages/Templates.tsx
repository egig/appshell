import { ListView } from '../components/ListView';
import { useNavigate } from 'react-router';

interface Template {
  id: string;
  title: string;
  description: string;
  path: string;
}

interface TemplateCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  templates: Template[];
}

const templateCategories: TemplateCategory[] = [
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
  const navigate = useNavigate();

  const handleTemplateClick = (template: Template) => {
    navigate(template.path);
  };

  const renderTemplateItem = (item: { id: string; data: Template }) => {
    const template = item.data;
    return (
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-white truncate">
              {template.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 truncate">
              {template.description}
            </p>
          </div>
          <div className="flex-shrink-0 ml-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  const renderQuickStartItem = (item: { id: string; data: Template }) => {
    const template = item.data;
    return (
      <div className="p-3">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mb-2">
            {template.title.charAt(0)}
          </div>
          <h3 className="font-medium text-gray-900 dark:text-white text-sm">
            {template.title}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            {template.description}
          </p>
        </div>
      </div>
    );
  };

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
              
              <ListView
                items={category.templates.map(template => ({ id: template.id, data: template }))}
                renderItem={renderTemplateItem}
                onItemClick={(item) => handleTemplateClick(item.data)}
                itemClassName="cursor-pointer hover:border-green-200 dark:hover:border-green-800"
              />
            </div>
          ))}
        </div>

        {/* Quick Start */}
        <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Start</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Start with the most commonly used templates:
          </p>
          <ListView
            items={[
              { id: 'profile', data: { id: 'profile', title: '👤 Profile', description: 'User profile page', path: '/templates/profile' }},
              { id: 'contact', data: { id: 'contact', title: '📝 Contact', description: 'Contact form', path: '/templates/contact' }}
            ]}
            renderItem={renderQuickStartItem}
            onItemClick={(item) => handleTemplateClick(item.data)}
            className="grid grid-cols-2 gap-3"
            itemClassName="cursor-pointer hover:border-green-200 dark:hover:border-green-800"
          />
        </div>
      </div>
    </div>
  );
}
