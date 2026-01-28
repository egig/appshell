import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import { TabLayout } from './layouts/TabLayout';
import { Home } from './pages/Home';
import { HomeDetail } from './pages/HomeDetail';
import { Explore } from './pages/Explore';
import { ExploreDetail } from './pages/ExploreDetail';
import { Profile } from './pages/Profile';
import { ProfileSettings } from './pages/ProfileSettings';
import { PageTransition } from './components/PageTransition';
import { useLocation } from 'react-router';
import { NavigationProvider } from './contexts/NavigationContext';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<TabLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route
            path="home"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="home/:id"
            element={
              <PageTransition>
                <HomeDetail />
              </PageTransition>
            }
          />
          <Route
            path="explore"
            element={
              <PageTransition>
                <Explore />
              </PageTransition>
            }
          />
          <Route
            path="explore/:id"
            element={
              <PageTransition>
                <ExploreDetail />
              </PageTransition>
            }
          />
          <Route
            path="profile"
            element={
              <PageTransition>
                <Profile />
              </PageTransition>
            }
          />
          <Route
            path="profile/:id"
            element={
              <PageTransition>
                <ProfileSettings />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <AppRoutes />
      </NavigationProvider>
    </BrowserRouter>
  );
}

export default App;
