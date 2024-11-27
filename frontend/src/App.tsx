import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import ServicesPage from './pages/servicesPage/ServicesPage';
import ProjectsPage from './pages/projectsPage/ProjectsPage';
import ProjectPage from './pages/projectsPage/projectPage/ProjectPage';
import ServicePage from "./pages/servicesPage/servicePage/ServicePage";
import ContactPage from "./pages/contactPage/ContactPage";
import NewsletterPage from "./pages/newsletterPage/NewsletterPage";
import ShopPage from './pages/shopPage/ShopPage';
import ProductPage from './pages/shopPage/productPage/ProductPage';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServicePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:projectId" element={<ProjectPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/:productId" element={<ProductPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/newsletter" element={<NewsletterPage />} />
              {/* Catch-all route - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;