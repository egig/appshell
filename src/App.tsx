import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import { TabLayout } from './layouts/TabLayout';
import { Home } from './pages/Home';
import { HomeDetail } from './pages/HomeDetail';
import { Explore } from './pages/Explore';
import { ExploreDetail } from './pages/ExploreDetail';
import { Profile } from './pages/Profile';
import { ProfileSettings } from './pages/ProfileSettings';
import { ModalDemo } from './pages/ModalDemo';
import { FormExample } from './pages/FormExample';
import { Features } from './pages/Features';
import { CustomBackExample } from './pages/CustomBackExample';
import { NavbarExample } from './pages/NavbarExample';
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
            path="features"
            element={
              <PageTransition>
                <Features />
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
          <Route
            path="modal-demo"
            element={
              <PageTransition>
                <ModalDemo />
              </PageTransition>
            }
          />
          <Route
            path="modal-demo/:type"
            element={
              <PageTransition>
                <ModalDemo />
              </PageTransition>
            }
          />
          <Route
            path="form-example"
            element={<FormExample />}
          />
          <Route
            path="custom-back"
            element={
              <PageTransition>
                <CustomBackExample />
              </PageTransition>
            }
          />
          <Route
            path="navbar-example"
            element={
              <PageTransition>
                <NavbarExample />
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
