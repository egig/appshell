import { Outlet, useLocation } from 'react-router';
import { TabBar } from '../components/TabBar';

const FORM_PATHS = ['/form-example'];

export function TabLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-gray-50 dark:bg-black">
      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden pb-16">
        <Outlet />
      </main>

      {/* Tab Bar - Hide on form pages */}
      {!FORM_PATHS.includes(location.pathname) && <TabBar />}
    </div>
  );
}
