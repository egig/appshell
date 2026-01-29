import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import { TabLayout } from './layouts/TabLayout';
import { Home } from './pages/Home';
import { HomeDetail } from './pages/HomeDetail';
import { Explore } from './pages/Explore';
import { ExploreDetail } from './pages/ExploreDetail';
import { ModalDemo } from './pages/ModalDemo';
import { FormExample } from './pages/FormExample';
import { Features } from './pages/Features';
import { CustomBackExample } from './pages/CustomBackExample';
import { NavbarExample } from './pages/NavbarExample';
import { FeatureCardExample } from './pages/FeatureCardExample';
import { Examples } from './pages/Examples';
import { Templates } from './pages/Templates';
import { TemplateProfile } from './pages/TemplateProfile';
import { TemplateProfileSettings } from './pages/TemplateProfileSettings';
import { TemplateContact } from './pages/TemplateContact';
import { TemplateArticle } from './pages/TemplateArticle';
import { ButtonLinkExample } from './pages/ButtonLinkExample';
import { AnimationsExample } from './pages/AnimationsExample';
import { StateExample } from './pages/StateExample';
import { TodoExample } from './pages/TodoExample';
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
            element={<Explore />}
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
            path="examples"
            element={
              <PageTransition>
                <Examples />
              </PageTransition>
            }
          />
          <Route
            path="templates"
            element={
              <PageTransition>
                <Templates />
              </PageTransition>
            }
          />
          <Route
            path="templates/profile"
            element={
              <PageTransition>
                <TemplateProfile />
              </PageTransition>
            }
          />
          <Route
            path="templates/profile/:id"
            element={
              <PageTransition>
                <TemplateProfileSettings />
              </PageTransition>
            }
          />
          <Route
            path="templates/contact"
            element={
              <PageTransition>
                <TemplateContact />
              </PageTransition>
            }
          />
          <Route
            path="templates/article"
            element={
              <PageTransition>
                <TemplateArticle />
              </PageTransition>
            }
          />
          <Route
            path="examples/navbar"
            element={
              <PageTransition>
                <NavbarExample />
              </PageTransition>
            }
          />
          <Route
            path="examples/custom-back"
            element={
              <PageTransition>
                <CustomBackExample />
              </PageTransition>
            }
          />
          <Route
            path="examples/feature-card"
            element={
              <PageTransition>
                <FeatureCardExample />
              </PageTransition>
            }
          />
          <Route
            path="examples/button-link"
            element={
              <PageTransition>
                <ButtonLinkExample />
              </PageTransition>
            }
          />
          <Route
            path="examples/animations"
            element={
              <PageTransition>
                <AnimationsExample />
              </PageTransition>
            }
          />
          <Route
            path="examples/state"
            element={
              <PageTransition>
                <StateExample />
              </PageTransition>
            }
          />
          <Route
            path="examples/todo"
            element={
              <PageTransition>
                <TodoExample />
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
