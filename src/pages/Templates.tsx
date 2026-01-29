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
    id: 'mobile-crud',
    title: 'Mobile CRUD Interfaces',
    description: 'Touch-friendly CRUD operations for mobile apps',
    icon: '📱',
    templates: [
      { id: 'mobile-list-crud', title: 'Mobile List CRUD', description: 'Swipeable list with add/edit/delete actions', path: '/templates/mobile-list-crud' },
      { id: 'mobile-form-crud', title: 'Mobile Form CRUD', description: 'Optimized forms with mobile input patterns', path: '/templates/mobile-form-crud' },
      { id: 'mobile-cards-crud', title: 'Mobile Card CRUD', description: 'Touch-friendly card interface with actions', path: '/templates/mobile-cards-crud' }
    ]
  },
  {
    id: 'mobile-navigation',
    title: 'Mobile Navigation',
    description: 'Mobile-first navigation patterns and flows',
    icon: '🧭',
    templates: [
      { id: 'tab-navigation', title: 'Tab Navigation UI', description: 'Bottom tab navigation with gesture support', path: '/templates/tab-navigation' },
      { id: 'drawer-navigation', title: 'Drawer Navigation', description: 'Slide-out navigation menu for mobile', path: '/templates/drawer-navigation' },
      { id: 'stack-navigation', title: 'Stack Navigation', description: 'Mobile stack-based navigation flow', path: '/templates/stack-navigation' }
    ]
  },
  {
    id: 'mobile-input',
    title: 'Mobile Input Patterns',
    description: 'Mobile-optimized input and interaction patterns',
    icon: '👆',
    templates: [
      { id: 'mobile-forms', title: 'Mobile Forms', description: 'Touch-friendly forms with mobile keyboards', path: '/templates/mobile-forms' },
      { id: 'mobile-search', title: 'Mobile Search UI', description: 'Voice and text search with filters', path: '/templates/mobile-search' },
      { id: 'mobile-media', title: 'Mobile Media Upload', description: 'Camera and gallery integration', path: '/templates/mobile-media' }
    ]
  },
  {
    id: 'mobile-layouts',
    title: 'Mobile Layouts',
    description: 'Responsive layouts optimized for mobile screens',
    icon: '�',
    templates: [
      { id: 'mobile-dashboard', title: 'Mobile Dashboard', description: 'Compact dashboard with swipe gestures', path: '/templates/mobile-dashboard' },
      { id: 'mobile-feed', title: 'Mobile Feed Layout', description: 'Infinite scroll feed with pull-to-refresh', path: '/templates/mobile-feed' },
      { id: 'mobile-cards', title: 'Mobile Card Grid', description: 'Touch-optimized card grid layout', path: '/templates/mobile-cards' }
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
          Mobile-ready templates with touch interactions, gestures, and responsive layouts
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
