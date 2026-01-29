import { useState } from 'react';
import { Navbar } from '../components';
import { FeatureCard } from '../components';

export function FeatureCardExample() {
  const [clickedFeature, setClickedFeature] = useState<string | null>(null);

  const features = [
    {
      id: 'nav',
      icon: '🧭',
      title: 'Navigation',
      description: 'Tab, Stack, Modal patterns',
      variant: 'blue' as const,
      details: 'Advanced navigation system with multiple patterns'
    },
    {
      id: 'anim',
      icon: '✨',
      title: 'Animations',
      description: 'Smooth transitions',
      variant: 'purple' as const,
      details: 'Framer Motion powered page transitions'
    },
    {
      id: 'mobile',
      icon: '📱',
      title: 'Mobile First',
      description: 'PWA ready, safe areas',
      variant: 'green' as const,
      details: 'Mobile-optimized with PWA capabilities'
    },
    {
      id: 'ui',
      icon: '🎨',
      title: 'Modern UI',
      description: 'Glassmorphic design',
      variant: 'orange' as const,
      details: 'Modern glassmorphic design system'
    }
  ];

  const handleFeatureClick = (featureId: string) => {
    setClickedFeature(featureId);
    setTimeout(() => setClickedFeature(null), 2000);
  };

  return (
    <div className="h-full scroll-area">
      <Navbar title="FeatureCard Component" />
      
      <div className="safe-top safe-x">
        <div className="pt-8">
          {/* Basic Usage */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Basic Usage</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  variant={feature.variant}
                />
              ))}
            </div>
          </div>

          {/* Clickable Cards */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Clickable Cards</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Tap any card below to see click feedback
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  variant={feature.variant}
                  onClick={() => handleFeatureClick(feature.id)}
                />
              ))}
            </div>
            {clickedFeature && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-blue-800 dark:text-blue-300">
                  ✅ You clicked: {features.find(f => f.id === clickedFeature)?.title}
                </p>
              </div>
            )}
          </div>

          {/* Size Variants */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Size Variants</h2>
            <div className="space-y-4">
              <FeatureCard
                icon="📱"
                title="Small Size"
                description="Compact card layout"
                variant="blue"
                size="sm"
              />
              <FeatureCard
                icon="📱"
                title="Medium Size"
                description="Default card layout"
                variant="purple"
                size="md"
              />
              <FeatureCard
                icon="📱"
                title="Large Size"
                description="Spacious card layout"
                variant="green"
                size="lg"
              />
            </div>
          </div>

          {/* All Color Variants */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Color Variants</h2>
            <div className="grid grid-cols-2 gap-4">
              <FeatureCard
                icon="🔵"
                title="Blue"
                description="Primary blue variant"
                variant="blue"
              />
              <FeatureCard
                icon="🟣"
                title="Purple"
                description="Secondary purple variant"
                variant="purple"
              />
              <FeatureCard
                icon="🟢"
                title="Green"
                description="Success green variant"
                variant="green"
              />
              <FeatureCard
                icon="🟠"
                title="Orange"
                description="Warning orange variant"
                variant="orange"
              />
              <FeatureCard
                icon="🩷"
                title="Pink"
                description="Accent pink variant"
                variant="pink"
              />
              <FeatureCard
                icon="⚫"
                title="Gray"
                description="Neutral gray variant"
                variant="gray"
              />
            </div>
          </div>

          {/* Code Example */}
          <div className="pb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Usage Example</h2>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`import { FeatureCard } from '../components';

// Basic usage
<FeatureCard
  icon="🧭"
  title="Navigation"
  description="Tab, Stack, Modal patterns"
  variant="blue"
/>

// Clickable with custom handler
<FeatureCard
  icon="✨"
  title="Animations"
  description="Smooth transitions"
  variant="purple"
  onClick={() => console.log('Clicked!')}
/>

// Different sizes
<FeatureCard
  icon="📱"
  title="Mobile First"
  description="PWA ready, safe areas"
  variant="green"
  size="lg"
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
