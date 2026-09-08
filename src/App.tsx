/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { WorksPage } from './pages/WorksPage';
import { ContactPage } from './pages/ContactPage';

const ProjectDetailPage = () => {
  const { id } = useNavigation();
  return (
    <div className="min-h-[100dvh] pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold">Case Study Detail Placeholder</h1>
      <p className="mt-4">You are viewing the details for project: {id}</p>
    </div>
  );
};

function Router() {
  const { view } = useNavigation();

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'works':
        return <WorksPage />;
      case 'work-detail':
        return <ProjectDetailPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Home />;
    }
  };

  return <Layout>{renderView()}</Layout>;
}

export default function App() {
  return (
    <NavigationProvider>
      <Router />
    </NavigationProvider>
  );
}
