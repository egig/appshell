import { Outlet, useLocation } from 'react-router';
import { TabBar } from '../components/TabBar';
import { BackButton } from '../components/BackButton';

const ROOT_PATHS = ['/home', '/explore', '/profile', '/'];

export function TabLayout() {
  const location = useLocation();

  // Determine if back button should be shown
  const shouldShowBackButton = !ROOT_PATHS.includes(location.pathname);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-gray-50 dark:bg-black">
      {/* Back Button */}
      <BackButton show={shouldShowBackButton} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden pb-16">
        <Outlet />
      </main>

      {/* Tab Bar */}
      <TabBar />
    </div>
  );
}
