/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { WorksPage } from './pages/WorksPage';
import { ContactPage } from './pages/ContactPage';

// Note: /works/:id placeholder
const ProjectDetailPage = () => <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto"><h1 className="text-4xl font-bold">Case Study Detail Placeholder</h1><p className="mt-4">You are viewing the details for this project.</p></div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="works" element={<WorksPage />} />
          <Route path="works/:id" element={<ProjectDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          {/* Catch-all route to redirect back to home (/) to prevent getting stuck on other pages inadvertently */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
